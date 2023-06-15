from redis import Redis
from flask_sqlalchemy import SQLAlchemy

from config import Config
from apps.controllers.router import app


db = SQLAlchemy(app)
cache = Redis(host=Config.REDIS_HOST, port=Config.REDIS_PORT)



@app.teardown_request
def shutdown_session(exception=None):
    db.session.remove()


@app.before_first_request
def set_cache_init():
    # db에서 불러오는 코드로 변경예정
    app.logger.info("RUN app.before_first_request")
    
    if not cache.exists('session_number_lastest'):
        session_number_lastest = 0
        cache.set("session_number_lastest",session_number_lastest)