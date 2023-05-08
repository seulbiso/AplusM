from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory, ConversationBufferWindowMemory
from config import ModelConfig
import jsonpickle
import json


from langchain import SerpAPIWrapper, LLMChain
from langchain.agents import ZeroShotAgent, Tool, AgentExecutor
from apps.database.pubsub import PubsubChatLog
from langchain.output_parsers import PydanticOutputParser, OutputFixingParser, RetryOutputParser
from pydantic import BaseModel, Field, validators
from langchain.output_parsers import RetryWithErrorOutputParser


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
        
        self.memory = ConversationBufferMemory(memory_key="history", input_key='input', output_key="output")

        # Agent 생성
        self.llm_chain = LLMChain(llm=self.llm, prompt=prompt)
        self.agent = ZeroShotAgent(llm_chain=self.llm_chain, tools=self.tools, verbose=True)


        # Chain 생성 = Agent + Tools + Memory
        self.agent_chain = AgentExecutor.from_agent_and_tools(agent=self.agent, tools=self.tools, verbose=True, memory=self.memory, return_intermediate_steps=True)


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
    ********** 수정 예정 ************
    '''

    def __init__(self, prompt):
        self.llm = ChatOpenAI(openai_api_key = ModelConfig.GPT.API_KEY,temperature=0.0)
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