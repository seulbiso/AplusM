from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory, ConversationBufferWindowMemory
from config import Config, ModelConfig
import json, jsonpickle

from langchain import SerpAPIWrapper, LLMChain
from langchain.agents import ZeroShotAgent, Tool, AgentExecutor
from apps.database.pubsub import PubsubChatLog

from langchain.document_loaders import PyPDFLoader, S3FileLoader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA, ConversationalRetrievalChain
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores.redis import Redis
import redis

class SimpleChat:
    '''
    LLM, Prompt, Memory를 연결해 Conversation Chain을 생성한다.
    '''

    def __init__(self, prompt):
        self.llm = ChatOpenAI(openai_api_key = ModelConfig.GPT.API_KEY,temperature=0.7)
        self.prompt = prompt
        self.chatgpt_chain = ConversationChain(
            llm = self.llm, 
            prompt = self.prompt,
            verbose = True, 
            memory = ConversationBufferMemory(return_messages=True)
        )

    def chain(self, input):
        '''
        Args:
            - input(string): 사용자가 입력한 질문
        Returns:
            - output(string): GPT 모델의 답변
        '''

        PubsubChatLog.publish('답변 생성 ing...........')
        output = self.chatgpt_chain.predict(input=input)

        return output

    def to_json(self):
        return jsonpickle.encode(self)
    
    
class BrowseChat:
    '''
    SimpleChat에 Google Search API를 연결해 Browsing 기능이 적용된 Conversation Chain을 생성한다.
    '''

    def __init__(self, prompt):

        # Tool 생성
        self.params ={
            "engine": "google",
            "hl": "ko",
            "gl": "kr"
        }
        self.llm = ChatOpenAI(openai_api_key = ModelConfig.GPT.API_KEY,temperature=0.0)
        self.search = SerpAPIWrapper(params=self.params, serpapi_api_key = ModelConfig.SERP.API_KEY)
        self.tools = [
            Tool(
                name = "Search",
                func= self.search.run,
                description="useful for when you need to answer questions about current events"
            )
        ]
        
        self.memory = ConversationBufferWindowMemory(k=3, memory_key="history", input_key='input', output_key="output")

        # Agent 생성
        self.llm_chain = LLMChain(llm=self.llm, prompt=prompt)
        self.agent = ZeroShotAgent(llm_chain=self.llm_chain, tools=self.tools, verbose=True)


        # Chain 생성 = Agent + Tools + Memory
        self.agent_chain = AgentExecutor.from_agent_and_tools(agent=self.agent, 
                                                              tools=self.tools, 
                                                              verbose=True, 
                                                              memory=self.memory, 
                                                              return_intermediate_steps=True, 
                                                              max_iterations=4, 
                                                              early_stopping_method="generate")


    def chain(self, input):
        '''
        Args:
            - input(string): 사용자가 입력한 질문
        Returns:
            - output(string): GPT 모델의 답변
        '''
        output = "  "

        self.agent_chain.tools = [
            Tool(
                name = "Search",
                func= self.search.run,
                description="useful for when you need to answer questions about current events"
            )
        ]

        # LOGGING
        PubsubChatLog.publish('답변 생성 ing...........')

    
        response = self.agent_chain({"input":input})
        output = response['output']
        steps = json.loads(json.dumps(response["intermediate_steps"], indent=2, ensure_ascii=False))

        # LOGGING
        for i, step in enumerate(steps):
            if i == 0:
                PubsubChatLog.publish(step[0][-1])
            else: 
                PubsubChatLog.publish(f"Thought: {step[0][-1]}")
            PubsubChatLog.publish(f"Observation: {step[-1]}")

        return output

    def to_json(self):
        return jsonpickle.encode(self)
    

class DocsChat:
    '''
    Index Search를 통해 문서 참조 기능이 적용된 Conversation Chain을 생성한다.
    '''

    def __init__(self, prompt, index_name='test1'):
        self.redis_url = f"redis://{Config.REDIS_HOST}:{Config.REDIS_PORT}"

        self.llm = ChatOpenAI(openai_api_key = ModelConfig.GPT.API_KEY,temperature=0.0)
        self.embeddings = OpenAIEmbeddings(openai_api_key=ModelConfig.GPT.API_KEY)
        self.prompt = prompt
        # Check if Index Exists
        self.embed_db = self.load_vectorstore(index_name) if self.check_index_exists(index_name) else self.create_vectorstore(index_name)
        # self.index_chain = ConversationalRetrievalChain.from_llm(self.llm, self.embed_db.as_retriever(), return_source_documents=True)
        self.qa = RetrievalQA.from_chain_type(llm=self.llm, chain_type="stuff", retriever=self.embed_db.as_retriever())

    def check_index_exists(self, index_name):
        client = redis.from_url(self.redis_url)
        try:
            client.ft(index_name).info()
        except:
        # LOGGING
            PubsubChatLog.publish('새로운 문서입니다.')
            return False
        # LOGGING
        PubsubChatLog.publish('문서가 존재합니다.')
        return True

    def create_vectorstore(self, index_name):

        # Load File from S3
        dir = "/home/ubuntu/test/yum/AplusM/flask/apps/models/tmp/doc_test.pdf"
        document = PyPDFLoader(dir).load()
        # document = S3FileLoader(dir).load() ## s3 load로 수정 

        # Text Split
        docs = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0).split_documents(document)

        # Save to Redis with Index
        embed_db = Redis.from_documents(docs, self.embeddings, redis_url=self.redis_url,  index_name=index_name)

        # LOGGING
        PubsubChatLog.publish('문서 저장 완료!')
        return embed_db
    

    def load_vectorstore(self, index_name):

        # LOGGING
        PubsubChatLog.publish('문서를 불러오는 중........')

        # Load from existing index
        embed_db = Redis.from_existing_index(self.embeddings, redis_url=self.redis_url,  index_name=index_name)

        return embed_db


    def chain(self, input):
        '''
        Args:
            - input(string): 사용자가 입력한 질문
        Returns:
            - output(string): GPT 모델의 답변
        '''

        PubsubChatLog.publish('답변 생성 ing...........')
        # output = self.index_chain({"question":input, "chat_history":[]})
        output = self.qa.run(input)

        return output

    def to_json(self):
        return jsonpickle.encode(self)