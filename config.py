# -*- coding: utf-8 -*-
import os
import json

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA = json.loads(open('{}/config.json'.format(ROOT_DIR)).read())
MODEL = json.loads(open('{}/config_model.json'.format(ROOT_DIR)).read())

class JsonConfig:
    @staticmethod
    def get_data(varname, value=None):
        return DATA.get(varname) or os.environ.get(varname) or value
    
    @staticmethod
    def get_data_model(varname, value=None):
        return MODEL.get(varname) or os.environ.get(varname) or value
    
    @staticmethod
    def set_data(key, value):
        DATA[key] = value
        with open('{}/config.json'.format(ROOT_DIR), 'w') as f:
            json.dump(DATA, f, indent=4)

    @staticmethod
    def set_data_model(key, value):
        DATA[key] = value
        with open('{}/config_model.json'.format(ROOT_DIR), 'w') as f:
            json.dump(DATA, f, indent=4)

    


# app config
class Config:
    ROOT_DIR = ROOT_DIR
    STATIC_DIR = '{0}/static'.format(ROOT_DIR)
    TEMPLATES_DIR = '{0}/templates'.format(ROOT_DIR)
    ERROR_CODE = {
        40000: 'Bad Request',
        41000: 'Gone',
        40300: 'Forbidden',
        40400: 'Not Found',
        50000: 'Internal Server Error',
    }

    APP_HOST = JsonConfig.get_data('APP_HOST', '0.0.0.0')
    APP_PORT = int(JsonConfig.get_data('APP_PORT', 80))


class FlaskConfig:
    None


class ModelConfig:
    class GPT :
        API_KEY = JsonConfig.get_data_model('GPT').get("API_KEY")
 