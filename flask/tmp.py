import os
import sys
import time
from apps.models.chat.service import ChatService


sys.path.append(os.path.dirname(os.path.abspath(__file__)))


# **** User Input **** #
# --> Prompt 설계에 따라 수정 예정


# Mode(string)
mode = "browsing"

# Persona(dict)
persona = "선생님"

# User Info(dict)
user_info = {"user_info_name":"안재형","user_info_age":"24","user_info_sex":"남성", "user_info_job":"교수","user_info_hobby":"골프"}

# Chat_Q(string)
chat_Q = "2023년 현재 대한민국의 대통령은?"



def main():
    # step1. Prompt 생성
    # prompt = Prompt().write_prompt(persona, user_info)

    # step2. Chat 생성
    # chat = SimpleChat(prompt)
    # chat = ChatService(mode).chat

    # # step3. 질문 입력
    # output, conversation_chain = chat.predict(chat_Q)
    # output, record = chat.predict(chat_Q, mode, persona, user_info)
    output, steps = ChatService(mode, persona, user_info).predict(chat_Q)
    
    # # step4. History 저장
    # SaveHistory(mode, persona, user_info, conversation_chain).db_insert()
    
    # print(output)
    print(output)
    print(steps)

    return output



if __name__ == '__main__':
    start = time.time()
    main()
    end = time.time()
    print(f"{end - start:.5f} sec")