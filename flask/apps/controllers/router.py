from flask import Flask

from apps.common.register import BlueprintRegister

from config import Config

def create_app():
    app = Flask(__name__, template_folder=Config.TEMPLATES_DIR, static_folder=Config.STATIC_DIR)
    BlueprintRegister(app=app, module_path='apps.controllers', controller_name='controllers').register()
    return app