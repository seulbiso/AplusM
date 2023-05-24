from flask import current_app
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory, ConversationBufferWindowMemory
from config import Config, ModelConfig
import json, jsonpickle
from apps.common.util import Util
from apps.models.log.logging import Logging


from langchain import SerpAPIWrapper, LLMChain
from langchain.agents import ZeroShotAgent, Tool, AgentExecutor

from langchain.document_loaders import DirectoryLoader, PyPDFLoader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chains import RetrievalQA
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores.redis import Redis
import redis

from apps.storage import s3
import re, os, tempfile



class SimpleChat:
    '''
    LLM, Prompt, Memory를 연결해 Conversation Chain을 생성한다.
    '''

    def __init__(self, prompt):
        self.llm = ChatOpenAI(temperature=0.7)
        self.prompt = prompt
        self.conv = ConversationChain(
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

        Logging("INFO").send_log({Logging.CONTENT:"답변 생성 ing..........."})
        output = self.conv.predict(input=input)

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
        self.llm = ChatOpenAI(temperature=0.0)
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
        self.conv = AgentExecutor.from_agent_and_tools(agent=self.agent, 
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

        self.conv.tools = [
            Tool(
                name = "Search",
                func= self.search.run,
                description="useful for when you need to answer questions about current events"
            )
        ]

        # LOGGING
        Logging("INFO").send_log({Logging.CONTENT:"답변 생성 ing..........."})
        Logging("INFO").send_log({Logging.CONTENT:"Google 검색 ing..........."})
    
        response = self.conv({"input":input})
        output = response['output']
        steps = json.loads(json.dumps(response["intermediate_steps"], indent=2, ensure_ascii=False))

        # LOGGING
        for step in steps:
            Logging("SEARCH").send_log({Logging.CONTENT:f"Thought: {step[0][-1]}" + f"\nObservation: {step[-1]}"})

        return output

    def to_json(self):
        return jsonpickle.encode(self)



class DocsChat:
    '''
    Index Search를 통해 문서 참조 기능이 적용된 Conversation Chain을 생성한다.
    '''

    def __init__(self, prompt, file_index):
        
        # Set Index
        self.file, self.index = file_index, re.sub(r"\.[a-zA-Z0-9]+$", "", file_index.split(Util.S3_FILE_DEL)[-1])
        
        # Redis URL
        self.redis_url = f"redis://{Config.REDIS_HOST}:{Config.REDIS_PORT}"
        
        # Models
        self.llm = ChatOpenAI(temperature=0.0)
        self.embeddings = OpenAIEmbeddings(openai_api_key=ModelConfig.GPT.API_KEY)
        
        # Prompt
        self.prompt = prompt
        

    def check_index_exists(self, index_name):
        print("-------------------------------------")
        print(f"INDEX: {index_name}")
        print("-------------------------------------")

        client = redis.from_url(self.redis_url)
        try:
            client.ft(index_name).info()
        except:
        # LOGGING
            Logging("INFO").send_log({Logging.CONTENT:"새로운 문서입니다."})
            return False
        # LOGGING
        Logging("INFO").send_log({Logging.CONTENT:"문서를 불러오는 중........"})
        
        return True

    def create_vectorstore(self, index_name):

        # Load File from S3
        conn = s3.s3_connection()
        file = 'description/'+ self.file
        file_win = 'description\\'+ self.file
        
        with tempfile.TemporaryDirectory() as temp_dir:
            file_path = f"{temp_dir}\\{file_win}"
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            s3.s3_get_object(conn, Config.BUCKET_NAME, file, file_path)
            document = PyPDFLoader(file_path).load()
                     

        # Text Split
        docs = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50).split_documents(document)

        # Save to Redis with Index
        embed_db = Redis.from_documents(docs, self.embeddings, redis_url=self.redis_url,  index_name=index_name)

        # LOGGING
        Logging("INFO").send_log({Logging.CONTENT:"문서 저장 완료!"})
        
        return embed_db
    

    def load_vectorstore(self, index_name):

        # LOGGING
        Logging("INFO").send_log({Logging.CONTENT:"내용 검색 중........"})

        # Load from existing index
        embed_db = Redis.from_existing_index(self.embeddings, redis_url=self.redis_url,  index_name=index_name)

        return embed_db

    def multiple_docs(self):
        
        # LOGGING
        Logging("INFO").send_log({Logging.CONTENT:"전체 문서에서 검색 ing..."})
        
        # Load File List from S3
        conn = s3.s3_connection()
        file = f"{Config.BUCKET_FODLER}/"+ self.file
        file_list = s3.s3_list_objects_key(conn, Config.BUCKET_NAME, Config.BUCKET_FODLER)
        print("---------------------------")
        print(file_list)
        print("----------------------------")
        
        with tempfile.TemporaryDirectory() as temp_dir:
            for path in file_list:
                path = path.replace(f"{Config.BUCKET_FODLER}/", "")
                file_path = f"{temp_dir}/{path}"
                os.makedirs(os.path.dirname(file_path), exist_ok=True)
                s3.s3_get_object(conn, Config.BUCKET_NAME, file, file_path)

            documents = DirectoryLoader(temp_dir, glob="./*.pdf", loader_cls=PyPDFLoader).load()
            
        # Text Split
        docs = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50).split_documents(documents)
        
        # Save to Redis with Index
        embed_db = Redis.from_documents(docs, self.embeddings, redis_url=self.redis_url)
        
        return embed_db
        

    def chain(self, input):
        '''
        Args:
            - input(string): 사용자가 입력한 질문
        Returns:
            - output(string): GPT 모델의 답변
        '''
        # LOGGING
        Logging("INFO").send_log({Logging.CONTENT:"답변 생성 ing..........."})
        
        # Check if Index Exists
        self.embed_db = self.load_vectorstore(self.index) if self.check_index_exists(self.index) else self.create_vectorstore(self.index)
        # self.embed_db = self.multiple_docs()  # retrieve from multiple documents
        self.conv = RetrievalQA.from_chain_type(llm=self.llm,
                                              chain_type="stuff",
                                              retriever=self.embed_db.as_retriever(),
                                              chain_type_kwargs={"prompt": self.prompt},
                                              return_source_documents=True)
        
        res = self.conv({"query": input})
        output = res["result"]
        
        # LOGGING
        for doc in res['source_documents']:
            logs = {
                Logging.CONTENT:f"와우! {int(doc.metadata['page'])+1}page에서 찾았어요!",
                Logging.DOCS_DETAIL: doc.page_content,
                Logging.DOCS_LINK:s3.s3_get_file_path(self.file), 
                Logging.DOCS_PAGE:str(int(doc.metadata['page'])+1)
                }
            Logging("DOCS").send_log(logs)
        

        return output

    def to_json(self):
        return jsonpickle.encode(self)