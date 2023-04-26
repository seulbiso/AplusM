from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory, ConversationBufferWindowMemory
from config import ModelConfig
import jsonpickle

class SimpleChat:
    '''
    LLM, Prompt, Memory를 연결해 Conversation Chain을 생성한다.
    '''

    def __init__(self, prompt):
        self.llm = ChatOpenAI(openai_api_key = ModelConfig.GPT.API_KEY,temperature=0.0)
        self.prompt = prompt
<<<<<<< Updated upstream
=======
        self.chatgpt_chain = None
        
>>>>>>> Stashed changes
        self.chatgpt_chain = ConversationChain(
            llm = self.llm, 
            prompt = self.prompt,
            verbose = True, 
<<<<<<< Updated upstream
            memory = ConversationBufferMemory(return_messages=True)
        )

=======
            #memory= self.memory
            memory = ConversationBufferMemory(return_messages=True)
        )
>>>>>>> Stashed changes

    def chain(self, input):
        '''
        Args:
            - input(string): 사용자가 입력한 질문
        Returns:
            - output(string): GPT 모델의 답변
        '''

<<<<<<< Updated upstream
=======
    
       
>>>>>>> Stashed changes
        output = self.chatgpt_chain.predict(input=input)

        return output

    def to_json(self):
        return jsonpickle.encode(self)