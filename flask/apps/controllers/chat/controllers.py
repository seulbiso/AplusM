from flask import Blueprint, session, request, jsonify, current_app
import flask
import jsonpickle, json


from apps.models.prompt.preprocess import Prompt
from apps.models.chat.chain import SimpleChat

from apps.database.publish import PubsubChatLog
from apps.database.session import cache
from apps.database.models import history_head

app = Blueprint('chat', __name__, url_prefix='/chat')


@app.route('', methods=['POST'])
def chat():

    current_app.logger.info("POST /CHAT")


    PubsubChatLog.publish('POST /CHAT')
    if request.method == 'POST':

        PubsubChatLog.publish('Get user input from form data')
        # Get user input from form data
        input = request.form['chat_Q']
        persona = request.form['persona']
        user_info = json.loads(request.form['user_info'])

        PubsubChatLog.publish('Check if SimpleChat instance exists in session')
        # Check if SimpleChat instance exists in session
        if 'simple_chat' not in session:
            # Create a new SimpleChat instance and store it in session
            prompt = Prompt().write_prompt(persona, user_info)
            simple_chat = SimpleChat(prompt=prompt)
            session['simple_chat'] = simple_chat.to_json()

        else:
            PubsubChatLog.publish('Retrieve SimpleChat instance from session')
            # Retrieve SimpleChat instance from session
            simple_chat = jsonpickle.decode(session['simple_chat'])     

        output = simple_chat.chain(input)   

        PubsubChatLog.publish('chat_A %s'%(output))
    
        session['simple_chat'] = simple_chat.to_json()

        response= {
            'chat_A' : output
        }


    return jsonify(response)


# def test_connect_db():
#     rows = history_head.query.all()
#     print("rows ", rows)

def event_stream(channel):
    pubsub = cache.pubsub()
    pubsub.subscribe(channel)
    # current_app.logger.info("RUN event_stream %s" %(channel))
    # TODO: handle client disconnection.
    for message in pubsub.listen():
        if message['type']=='message':
            data = 'data: %s\n\n' % message['data'].decode('utf-8')
            print ("message in pubsub.listen()" , data)
            yield data


@app.route('/stream')
def stream():
    return flask.Response(event_stream(channel=PubsubChatLog.publish_channel_name()),
                          mimetype="text/event-stream")