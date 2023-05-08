from flask import Blueprint, render_template, session, current_app

from apps.database.session import cache


app = Blueprint('index', __name__, url_prefix='/')


@app.route('', methods=['GET'])
def index():

    session_clear()

    if 'session_number' not in session:
        set_session_number()

    return render_template('dist/index.html')

def set_session_number():
    '''
    redis cache session number 값을 1 증가
    session number 세팅
    '''
    cache.incr(name='session_number_lastest')
    #session['session_number'] = int(cache.get("session_number_lastest").decode('utf-8'))
    session['session_number'] = cache.get("session_number_lastest")
    current_app.logger.info('CHECK VALUE session_number : %s', session['session_number'])

def session_clear():
    session.clear()
