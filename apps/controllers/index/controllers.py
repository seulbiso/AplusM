from flask import Blueprint, render_template

from apps.common.response import ok
from config import Config

app = Blueprint('index', __name__, url_prefix='/')

@app.route('', methods=['GET'])
def index():
    return render_template('layout/index.html')
