from apps.database.session import db



class atm_history_head(db.Model):
    __tablename__ = 'atm_history_head'
    session_number = db.Column(db.Integer, primary_key=True)
    conversation_date = db.Column(db.DateTime)

history_head= atm_history_head