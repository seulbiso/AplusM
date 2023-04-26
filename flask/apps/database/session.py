from flask_sqlalchemy import SQLAlchemy
from apps.controllers.router import app

db = SQLAlchemy(app)


@app.teardown_request
def shutdown_session(exception=None):
    db.session.remove()
