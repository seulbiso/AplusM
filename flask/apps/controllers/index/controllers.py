from flask import Blueprint, render_template, session, url_for, redirect, request, g , jsonify
import random
import jsonpickle


from apps.common.response import ok
from config import Config

from apps.models.prompt.preprocess import Prompt
from apps.models.chat.basic import SimpleChat

from apps.database.models import history_head

app = Blueprint('dist', __name__, url_prefix='/')


@app.route('', methods=['GET'])
def index():
    test_connect_db()
    session.clear()
    if 'session_number' not in session:
        set_session()
    
    return render_template('dist/index.html')

def test_connect_db():
    rows = history_head.query.all()
    print("rows ", rows)

def set_session():
    session['session_number'] = random.randrange(1,100)

@app.route('clear', methods=['GET'])
def clear():
    session.clear()
    return redirect(url_for('.index'))


@app.route('chat', methods= ['POST'])
def chat():

    # Persona(dict)
    persona = {"persona_age":"60", "persona_personality":"따뜻한 엄마같은"}

    # User Info(dict)
    user_info = {"user_info_age":"24", "user_info_job":"취업준비생"}


    # Check if SimpleChat instance exists in session
    if 'simple_chat' not in session:
        # Create a new SimpleChat instance and store it in session
        prompt = Prompt().write_prompt(persona, user_info)
        simple_chat = SimpleChat(prompt=prompt)
        session['simple_chat'] = simple_chat.to_json()

    else:
        # Retrieve SimpleChat instance from session
        simple_chat = jsonpickle.decode(session['simple_chat'])
    

    if request.method == 'POST':
        # Get user input from form data
        input = request.form['chatMessage']
        output = simple_chat.chain(input)
        
        #print output
        print(output)
        session['simple_chat'] = simple_chat.to_json()
    
        response= {
            'chatMessage' : output
        }

    return jsonify(response)



