from apps.models.chat.chain import SimpleChat, BrowseChat, DocsChat
from apps.models.chat.history import SaveHistory
import jsonpickle
from apps.models.prompt.preprocess import *
# from apps.database.pubsub import PubsubChatLog


class Chain:

    def __init__(self, mode = "default"):
        self.mode = mode
        self.number = 0
    

    def chat(self, persona, user_info):
        self.persona = persona
        self.user_info = user_info

        if self.mode == "default":
            prompt = Prompt().write_prompt(persona, user_info)
            conversation_chain = SimpleChat(prompt)

        elif self.mode == "browsing":
            prompt = BrowsePrompt().write_prompt(persona, user_info)
            conversation_chain = BrowseChat(prompt)

        elif self.mode == "docs":
            prompt = Prompt().write_prompt(persona, user_info) # 수정 필요
            conversation_chain = DocsChat(prompt)

        return conversation_chain

    def to_json(self):
        return jsonpickle.encode(self)
    


class ChatService(Chain):

    def __init__(self, mode="default", persona=None, user_info=None):
        super().__init__(mode)
        self.conversation_chain = self.chat(persona, user_info)

    def predict(self, chat_Q):

        # Set conversation_number
        self.number += 1

        # Predict
        output = self.conversation_chain.chain(chat_Q)
        # output, steps = self.conversation_chain.chain(chat_Q)
        # PubsubChatLog.publish('답변이 생성되었습니다.')

        # DB Save
        record = self.save(self.conversation_chain,
                           self.number,
                           self.mode,
                           self.persona,
                           self.user_info)  ## return x 수정 예정
        return output


    def save(self, *params):
        # res = SaveHistory(*params).get_record()
        '''
        DB SAVE 추가
        '''
        print("test")
        # return res
    
    def to_json(self):
        return jsonpickle.encode(self)