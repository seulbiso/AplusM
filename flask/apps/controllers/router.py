from flask import Flask
from flask_session import Session
import logging
import sys, os

from config import Config, ModelConfig
from apps.common.register import BlueprintRegister
from apps.common.response import error




app = Flask(__name__, template_folder=Config.TEMPLATES_DIR, static_folder=Config.STATIC_DIR)
app.secret_key ='abcedateateataeate'
app.config.from_object(Config.from_app_mode())
app.logger.setLevel(logging.DEBUG)
Session(app)
#os.environ['OPENAI_API_KEY'] = ModelConfig.GPT.API_KEY
os.environ['OPENAI_API_KEY'] = "d0906ae4f7774f5e86f7b3c55b5334b0"
os.environ['OPENAI_API_TYPE'] = "azure"
os.environ['OPENAI_API_BASE'] = "https://openai-shinhan-poc.openai.azure.com/"
os.environ['OPENAI_API_VERSION'] = "2023-03-15-preview"


BlueprintRegister(app=app, module_path='apps.controllers', controller_name='controllers').register()




@app.errorhandler(403)
def forbidden(err):
    return error(40300)


@app.errorhandler(404)
def page_not_found(err):
    return error(40400)


@app.errorhandler(410)
def gone(err):
    return error(41000)


@app.errorhandler(500)
def internal_server_error(err):
    return error(50000)
