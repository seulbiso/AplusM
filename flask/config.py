# -*- coding: utf-8 -*-
import os
import json
from redis import Redis

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA = json.loads(open('{}/config.json'.format(ROOT_DIR)).read())
MODEL = json.loads(open('{}/config_model.json'.format(ROOT_DIR)).read())
DB = json.loads(open('{}/config_db.json'.format(ROOT_DIR)).read())

class JsonConfig:
    @staticmethod
    def get_data(varname, value=None):
        return DATA.get(varname) or os.environ.get(varname) or value
    
    @staticmethod
    def get_data_model(varname, value=None):
        return MODEL.get(varname) or os.environ.get(varname) or value
    
    @staticmethod
    def get_data_db(varname, value=None):
        return DB.get(varname) or os.environ.get(varname) or value
    
    
    
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

    @staticmethod
    def set_data_db(key, value):
        DATA[key] = value
        with open('{}/config_db.json'.format(ROOT_DIR), 'w') as f:
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

    APP_MODE_PRODUCTION = 'production'
    APP_MODE_DEVELOPMENT = 'development'
    APP_MODE_TESTING = 'testing'

    APP_MODE = JsonConfig.get_data('APP_MODE', APP_MODE_PRODUCTION)
    APP_HOST = JsonConfig.get_data('APP_HOST', '0.0.0.0')
    APP_PORT = int(JsonConfig.get_data('APP_PORT', 80))

    # MARIA DB 설정
    DBMS = "MARIA_DB"
    DB_USER_NAME = JsonConfig.get_data_db(DBMS).get("DB_USER_NAME",'root')
    DB_USER_PASSWD = JsonConfig.get_data_db(DBMS).get("DB_USER_PASSWD", 'password')
    DB_HOST = JsonConfig.get_data_db(DBMS).get("DB_HOST", 'localhost')
    DB_PORT = JsonConfig.get_data_db(DBMS).get("DB_PORT", 3306)
    DB_NAME = JsonConfig.get_data_db(DBMS).get("DB_NAME", 'flask')

    # REDIS 설정
    DBMS = "REDIS"
    REDIS_HOST = JsonConfig.get_data_db(DBMS).get("REDIS_HOST",'localhost')
    REDIS_PORT = JsonConfig.get_data_db(DBMS).get("REDIS_PORT",'6379')

    # S3 설정
    STORAGE = "S3"
    AWS_ACCESS_KEY = JsonConfig.get_data_db(STORAGE).get("AWS_ACCESS_KEY",'AWS_ACCESS_KEY')
    AWS_SECRET_ACCESS_KEY = JsonConfig.get_data_db(STORAGE).get("AWS_SECRET_ACCESS_KEY",'AWS_SECRET_ACCESS_KEY')
    AWS_S3_BUCKET_REGION = JsonConfig.get_data_db(STORAGE).get("BUCKET_RESION",'BUCKET_RESION')
    BUCKET_NAME  = JsonConfig.get_data_db(STORAGE).get("BUCKET_NAME",'BUCKET_NAME')


    

    @staticmethod
    def from_app_mode():
        mode = {
            Config.APP_MODE_PRODUCTION: 'config.ProductionConfig',
            Config.APP_MODE_DEVELOPMENT: 'config.DevelopmentConfig',
            Config.APP_MODE_TESTING: 'config.TestingConfig',
        }
        return mode.get(Config.APP_MODE, mode[Config.APP_MODE_DEVELOPMENT])

    @staticmethod
    def database_url(dialect='mysql'):
        if dialect == 'mongodb':
            return '{}://{}:{}@{}:{}'.format(dialect, Config.DB_USER_NAME, Config.DB_USER_PASSWD, Config.DB_HOST, Config.DB_PORT)

        return '{}://{}:{}@{}:{}/{}?charset=utf8'.format(dialect, Config.DB_USER_NAME, Config.DB_USER_PASSWD,
                                                      Config.DB_HOST, Config.DB_PORT, Config.DB_NAME)



class FlaskConfig:
    SQLALCHEMY_DATABASE_URI = Config.database_url()
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    DEBUG = False
    TESTING = False
    SESSION_TYPE = 'redis'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = Redis(host=Config.REDIS_HOST, port=Config.REDIS_PORT)
    

class ModelConfig:
    class GPT :
        API_KEY = JsonConfig.get_data_model('GPT').get("API_KEY")
    class SERP :
        API_KEY = JsonConfig.get_data_model('SERP').get("API_KEY")
 

class ProductionConfig(FlaskConfig):
    SQLALCHEMY_DATABASE_URI = Config.database_url()


class DevelopmentConfig(FlaskConfig):
    SQLALCHEMY_ECHO = True
    DEBUG = True
    TESTING = True

