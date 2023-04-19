import os, sys, yaml
from langchain import PromptTemplate
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

class Prompt:

    def __init__(self, type="basic"):
        self.type = type

    def load_yaml(self, dir):
        with open(dir, encoding='utf8') as f:
            res =yaml.load(f, Loader=yaml.FullLoader)
        return res

    def load_template(self):
        dir = "apps/models/prompt/prompt_template.yaml"
        tmpl = self.load_yaml(dir)
        return tmpl

    def write_prompt(self):
        
        template = self.load_template()
        prompt_template = template[self.type]

        prompt = PromptTemplate(
            input_variables=prompt_template["input_variables"], 
            template=prompt_template["template"]
        )
        return prompt