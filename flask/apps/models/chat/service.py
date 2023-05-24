from flask import current_app
import jsonpickle
from apps.models.chat.chain import SimpleChat, BrowseChat, DocsChat
from apps.models.chat.history import SaveHistory
from apps.models.prompt.preprocess import *
from apps.models.prompt.postprocess import *
from apps.models.log.logging import Logging

class Chain:

    def __init__(self, mode = "mode_default"):
        self.mode = mode
        self.number = 0
    

    def chat(self, persona, user_info, file_index=None):
        self.persona = persona
        self.user_info = user_info
        conversation_chain = None
        
        if self.mode == "mode_default":
            prompt = Prompt().write_prompt(persona, user_info)
            conversation_chain = SimpleChat(prompt)

        elif self.mode == "mode_browsing":
            prompt = BrowsePrompt().write_prompt(persona, user_info)
            conversation_chain = BrowseChat(prompt)

        elif self.mode == "mode_docs":
            prompt = DocsPrompt().write_prompt(persona, user_info)
            conversation_chain = DocsChat(prompt, file_index)

        return conversation_chain

    def to_json(self):
        return jsonpickle.encode(self)
    


class ChatService(Chain):
  
    def __init__(self, mode="mode_default", persona=None, user_info=None, file_index=None):
        super().__init__(mode)
        self.conversation_chain = self.chat(persona, user_info, file_index)
        

    def predict(self, chat_Q):

        # Set conversation_number
        self.number += 1
        output = "다시 질문해주시겠어요?"
        
        # Predict
        try:
            output = postprocess(self.conversation_chain.chain(chat_Q))
            Logging("INFO").send({Logging.CONTENT:"답변 생성 완료!"})
        except Exception as e:
            error_message = f'오류가 발생하였습니다. : {e}'
            current_app.logger.error(error_message)
            Logging("INFO").send({Logging.CONTENT:error_message})

        # output = postprocess(self.conversation_chain.chain(chat_Q))
        # Logging("INFO").send({Logging.CONTENT:"답변 생성 완료!"})

        # DB Save
        record = self.save(self.conversation_chain.conv,
                           self.number,
                           self.mode,
                           self.persona,
                           self.user_info,
                           chat_Q,
                           output)  ## return x 수정 예정
        return output


    def save(self, *params):
        res = SaveHistory(*params).get_record()
        '''
        DB SAVE 추가
        '''
        # print("test")
        # return res
    
    def to_json(self):
        return jsonpickle.encode(self)