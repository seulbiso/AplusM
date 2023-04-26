from flask import Blueprint, render_template, request, Flask

from apps.common.response import ok
from config import Config

app = Blueprint('dist', __name__, url_prefix='/')

@app.route('', methods=['POST', 'GET'])
def index():
    return render_template('dist/index.html')



@app.route('/chat', methods=['POST', 'GET'])
def chat():
    if request.method == 'POST':
        temp = request.form['chatMessage']
    elif request.method == 'GET':
        pass
    return render_template('dist/index.html', chatMessage=temp)










