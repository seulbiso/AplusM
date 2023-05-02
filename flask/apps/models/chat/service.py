from apps.models.chat.chain import SimpleChat, BrowseChat, DocsChat
from apps.models.chat.history import SaveHistory
import jsonpickle


class ChatService:

    def __init__(self, mode = "default", prompt=None):
        if mode == "default":
            self.chat = SimpleChat(prompt)
            ### log: GPT 검색 중입니다.
        elif mode == "browsing":
            # self.chat = BrowseChat(prompt)
            self.chat = BrowseChat()
            ### log: Google 검색 중입니다.
        elif mode == "docs":
            self.chat = DocsChat(prompt)
            ### log: 문서를 읽어오는 중입니다.
        self.number = 0
    

    def predict(self, chat_Q, *params):
        self.number += 1
        output = self.chat.chain(chat_Q)
        record = self.save(*params)  ## return x 수정 예정
        return output, record

    def save(self, *params):
        conversation_chain = self.chat.chatgpt_chain
        res = SaveHistory(conversation_chain, self.number, *params).get_record()
        '''
        DB SAVE 추가
        '''
        # print(res)
        return res
    
    def to_json(self):
        return jsonpickle.encode(self)

        
