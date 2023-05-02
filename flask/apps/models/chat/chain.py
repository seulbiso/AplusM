from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory, ConversationBufferWindowMemory
from config import ModelConfig
import jsonpickle

from langchain import SerpAPIWrapper, LLMChain
from langchain.agents import ZeroShotAgent, Tool, initialize_agent, AgentExecutor


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
        ### log: 답변을 생성하고 있습니다.
        output = self.chatgpt_chain.predict(input=input)

        return output

    def to_json(self):
        return jsonpickle.encode(self)
    
    
class BrowseChat:
    '''
    ********** 수정 중 ************
    '''

    def __init__(self):  ## prompt, memory 서치 필요
        self.params ={
            "engine": "google",
            "hl": "ko",
            "gl": "kr"
        }
        self.llm = ChatOpenAI(openai_api_key = ModelConfig.GPT.API_KEY,temperature=0.7)
        self.search = SerpAPIWrapper(params=self.params, serpapi_api_key = ModelConfig.SERP.API_KEY)
        self.tools = [
            Tool(
                name = "Search",
                func= self.search.run,
                description="useful for when you need to answer questions about current events"
            )
        ]
        self.prompt = ZeroShotAgent.create_prompt(
                self.tools, 
                prefix="""Have a conversation with a human, answering the following questions as best you can. You have access to the following tools:""", 
                suffix='''{chat_history} \n (Questioner's Information)
                Name: {name}
                Age Group: {age}
                Sex: {sex}
                Job: {job}
                Hobby: {hobby}

                (Question)
                {input}
                ''', 
                input_variables=["input", "chat_history", "name", "age", "sex","job","hobby"]
            )
        self.memory = ConversationBufferMemory(memory_key="chat_history")
        # self.llm_chain = ConversationChain(llm=self.llm, prompt=self.prompt)
        self.llm_chain = LLMChain(llm=self.llm, prompt=self.prompt)

    def chain(self, input):
        '''
        Args:
            - input(string): 사용자가 입력한 질문
        Returns:
            - output(string): GPT 모델의 답변
        '''
        # agent = initialize_agent(self.tools, self.llm, agent="zero-shot-react-description", verbose=True)   ## agent 서치 필요
        # output = agent.run(input)
        agent = ZeroShotAgent(llm_chain=self.llm_chain, tools=self.tools, verbose=True)
        agent_chain = AgentExecutor.from_agent_and_tools(agent=agent, tools=self.tools, verbose=True, memory=self.memory)
        # output = agent_chain.run(input)
        output = agent_chain.run({"name":"안재형","age":"24","sex":"남성", "job":"교수","hobby":"골프", "input":"2023년 현재 대한민국의 대통령은?"})

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

        output = self.chatgpt_chain.predict(input=input)

        return output

    def to_json(self):
        return jsonpickle.encode(self)

