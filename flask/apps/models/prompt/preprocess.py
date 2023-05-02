import yaml
from langchain import PromptTemplate
from langchain.prompts import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate


class Preprocess:
    '''
    Prompt Template에 담길 기본 Prompt를 작성한다. (history, input 제외 나머지)
    '''

    def __init__(self):
        self.base = '''\nCurrent conversation:\n{history}\n'''
        self.template = self.load_template()
        self.instruction = self.template["instruction"]

    def persona(self, persona:str="친절한 상담원"):
        '''
        Args:
            - persona(string): 사용자가 입력한 persona 정보
        Returns:
            - __(string) persona 정보가 담긴 prompt
        '''
        res = self.template["persona"]["default"]

        if persona == "시니컬한 고양이":
            res = self.template["persona"]["cat"]
        elif persona == "지혜로운 노인":
            res = self.template["persona"]["elder"]
        else: res = res

        return res
    
    
    def user_info(self, user_info:dict):
        '''
        Args:
            - user_info(dict): 사용자가 입력한 user 정보
        Returns:
            - __(string): user 정보가 담긴 prompt
        '''
        name = user_info["user_info_name"]
        age = user_info["user_info_age"]
        sex = user_info["user_info_sex"]
        job = user_info["user_info_job"]
        hobby = user_info["user_info_hobby"]

        return f'''(Questioner's Information)
        Name: {name}
        Age Group: {age}
        Sex: {sex}
        Job: {job}
        Hobby: {hobby}

        '''
    def load_yaml(self, dir):
        with open(dir, encoding='utf8') as f:
            res =yaml.load(f, Loader=yaml.FullLoader)
        return res

    def load_template(self):
        dir = "apps/models/prompt/prompt_template.yaml"
        tmpl = self.load_yaml(dir)
        return tmpl
    
    

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

        input_variables = ["history"]

        chat_prompt = PromptTemplate(
            input_variables = input_variables,
            template = self.instruction + self.persona(persona=persona) + self.user_info(user_info=user_info) + self.base
            )
        
        prompt = ChatPromptTemplate.from_messages([
                SystemMessagePromptTemplate(prompt=chat_prompt),
                HumanMessagePromptTemplate.from_template("{input}")
                ])
        
        log = self.instruction + self.persona(persona=persona) + self.user_info(user_info=user_info)

        return prompt