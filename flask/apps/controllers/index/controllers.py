from flask import Blueprint, render_template, session, url_for, redirect, request, g
import random
import jsonpickle


from apps.common.response import ok
from config import Config

from apps.models.prompt.preprocess import Prompt
from apps.models.chat.basic import SimpleChat


app = Blueprint('index', __name__, url_prefix='/')


@app.route('', methods=['GET'])
def index():
    if 'session_number' not in session:
        set_session()
    
    return render_template('layout/index.html',session_number=session['session_number'])


def set_session():
    session['session_number'] = random.randrange(1,100)

@app.route('clear', methods=['GET'])
def clear():
    session.pop('session_number', None)
    session.pop('simple_chat', None)
    return redirect(url_for('.index'))


@app.route('chat', methods= ['POST'])
def chat():
    # **** User Input **** #
    # --> Prompt 설계에 따라 수정 예정

    # Persona(dict)
    persona = {"persona_age":"60", "persona_personality":"따뜻한 엄마같은"}

    # User Info(dict)
    user_info = {"user_info_age":"24", "user_info_job":"취업준비생"}

    input_test = ['나 취업 준비 그만하고 해외 여행이나 떠나고 싶어.',
                  '그래? 그럼 내가 지금 5년째 취업 준비 중인데 이럴 때는 떠나도 될까? 어떻게 생각해?',
                  '조언해줘서 고마워~ 나 다른거 물어봐도 돼?']

    # Check if SimpleChat instance exists in session
    if 'simple_chat' not in session:
        # Create a new SimpleChat instance and store it in session
        # step1. Prompt 생성
        prompt = Prompt().write_prompt(persona, user_info)
        # step2. Conversation Chain 생성
        simple_chat = SimpleChat(prompt=prompt)
       
        session['simple_chat'] = simple_chat.to_json()

        #print simple_chat object address
        print("simple_chat address  ", id(simple_chat))
        print("converstationBufferMemory", simple_chat.chatgpt_chain)
    else:
        # Retrieve SimpleChat instance from session
        simple_chat = jsonpickle.decode(session['simple_chat'])
    

    if request.method == 'POST':
        # Get user input from form data
        input = request.form['chat_Q']
        # step3. 질문 입력
        output = simple_chat.chain(input)

        session['simple_chat'] = simple_chat.to_json()
    
        #print simple_chat object address
        print("simple_chat address  ", id(simple_chat))
        #print converstationBufferMemory
        print("converstationBufferMemory", simple_chat.chatgpt_chain)

    return render_template('layout/index.html',session_number=session['session_number'], chat_A = output)



# class Test():
    
#     def __init__(self, session_number) :
#         print("TEST INIT :" , session_number)
#         self.session_number = session_number

#     def run(self):
#          print("TEST RUN :" , self.session_number)
    
#     def to_json(self):
#             return jsonpickle.encode(self)
    