from langchain import PromptTemplate
from langchain.prompts import ChatPromptTemplate, SystemMessagePromptTemplate


class Preprocess:
    '''
    Prompt Template에 담길 기본 Prompt를 작성한다. (history, input 제외 나머지)
    '''

    def __init__(self):
        self.base = '''\nCurrent conversation:\n{history}\nHuman: {input}\nAI:\n'''


    def persona(self, persona:dict):
        '''
        Args:
            - persona(dict): 사용자가 입력한 persona 정보
        Returns:
            - __(string) persona 정보가 담긴 prompt
        '''                

        age = persona["persona_age"]
        personality = persona["persona_personality"]
        return f"AI는 나이가 {age}살이고 {personality} 성격을 가진 사람이야. "
    
    
    def user_info(self, user_info:dict):
        '''
        Args:
            - user_info(dict): 사용자가 입력한 user 정보
        Returns:
            - __(string): user 정보가 담긴 prompt
        '''

        age = user_info["user_info_age"]
        job = user_info["user_info_job"]
        return f"Human은 {age}살이고 {job}이야."
    
    

class Prompt(Preprocess):
    '''
    기본 Prompt + History + Input = Prompt Template
    Langchain에서 제공하는 Prompt Template 객체로 생성한다.
    '''
        
    def __init__(self):
        super().__init__()

    def write_prompt(self, persona:dict, user_info:dict):
        '''
        Args:
            - persona(dict): 사용자가 입력한 persona 정보
            - user_info(dict): 사용자가 입력한 user 정보
        Returns:
            - prompt(ChatPromptTemplate): ConversationChain에 담길 Prompt
        '''

        input_variables = ["history", "input"]

        chat_prompt = PromptTemplate(
            input_variables = input_variables,
            template = self.persona(persona=persona) + self.user_info(user_info=user_info) + self.base
            )
        
        prompt = ChatPromptTemplate.from_messages([
                SystemMessagePromptTemplate(prompt=chat_prompt)
                ])

        return prompt