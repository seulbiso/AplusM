import json
from langchain import OpenAI, LLMChain
from langchain.memory import ConversationBufferWindowMemory
from config import ModelConfig

class SimpleChat:

    def __init__(self, prompt):
        self.llm = OpenAI(
            openai_api_key = ModelConfig.GPT.API_KEY,
                          temperature=0.7)
        self.prompt = prompt

    
    def chain(self, input):
        chatgpt_chain = LLMChain(
            llm = self.llm, 
            prompt = self.prompt,
            verbose = True, 
            memory = ConversationBufferWindowMemory(k=2),
        )
        output = chatgpt_chain.predict(human_input=input)
        # output = chatgpt_chain.predict(human_input=input, persona_age = ...)  # persona/user info 추가 시 수정 필요
        return output
    


