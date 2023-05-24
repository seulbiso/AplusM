from flask import Blueprint, request, jsonify, current_app, session
import flask
import jsonpickle, json

import pprint


from apps.models.prompt.preprocess import Prompt
from apps.models.chat.service import *

from apps.database.pubsub import PubsubChatLog
from apps.database.session import cache
from apps.database.models import history_head

app = Blueprint('chat', __name__, url_prefix='/chat')


@app.route('', methods=['POST'])
def chat():

    current_app.logger.info("POST /CHAT")


    if request.method == 'POST':

        # Get user input from form data
        mode = 'mode_default'
        input = request.form['chat_Q']
        persona = request.form['persona']
        user_info = json.loads(request.form['user_info'])
        mode = request.form['mode']
        docs = request.form['docs']

        current_app.logger.info(request)
    
        current_app.logger.info(f"REQUEST PARAM \n mode : {mode} \n input : {input}\n persona : {persona}\n mode : {mode}\n docs : {docs}"
                                )
        
        # Check if SimpleChat instance exists in session
        if 'chat' not in session:
            # Create a new SimpleChat instance and store it in session
            chat = ChatService(mode=mode, persona=persona, user_info=user_info, file_index= docs)
            session['chat'] = chat.to_json()

        else:
            # Retrieve SimpleChat instance from session
            chat = jsonpickle.decode(session['chat'])
        
        output = chat.predict(input)  

        chat_json = chat.to_json()
        session['chat'] = chat_json

        response= {
            'chat_A' : output
        }


    return jsonify(response)

def event_stream(channel):
    pubsub = cache.pubsub()
    pubsub.subscribe(channel)

    # TODO: handle client disconnection.
    for message in pubsub.listen():
        if message['type']=='message':
            line = message['data']
            yield 'data: '+ line +'\n\n' 


@app.route('/stream')
def stream():
    current_app.logger.info('GET /stream')
    current_app.logger.info(f'PubsubChatLog.publish_channel_name() {PubsubChatLog.publish_channel_name()}')
    try:
        response = flask.Response(event_stream(channel=PubsubChatLog.publish_channel_name()),
                          mimetype="text/event-stream")
    except Exception as e:
        current_app.logger.error(e)
    return response