from apps.database.pubsub import PubsubChatLog
import json

    
class Logging:
    
    CONTENT = "CONTENT"
    DOCS_DETAIL = "DETAIL"
    DOCS_LINK = "LINK"
    DOCS_PAGE = "PAGE"
    
    
    def __init__(self, type):
        self.type = type
    
    def write_log(self, params):
        logs = {
            'LOG_TYPE': self.type,
            self.type : params
            }
        
        return json.dumps(logs, ensure_ascii=False)
    
    def send_log(self, params):
        PubsubChatLog.publish(self.write_log(params))