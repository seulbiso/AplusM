import os
import sys
import time
from apps.models.prompt.preprocess import Prompt
from apps.models.chat.basic import SimpleChat

sys.path.append(os.path.dirname(os.path.abspath(__file__)))


# **** User Input **** #
# --> Prompt 설계에 따라 수정 예정

# Persona(dict)
persona = {"persona_age":"60", "persona_personality":"따뜻한 엄마같은"}

# User Info(dict)
user_info = {"user_info_age":"24", "user_info_job":"취업준비생"}

# Chat_Q(string)
chat_Q = "나 취업 준비 그만하고 해외 여행이나 떠나고 싶어."
# chat_Q = "그래? 그럼 내가 지금 5년째 취업 준비 중인데 이럴 때는 떠나도 될까? 어떻게 생각해? "
# chat_Q = "조언해줘서 고마워~ 나 다른거 물어봐도 돼?"



def main():
    # step1. Prompt 생성
    prompt = Prompt().write_prompt(persona, user_info)

    # step2. Conversation Chain 생성
    chat = SimpleChat(prompt)

    # step3. 질문 입력
    output = chat.chain(chat_Q)
    print(output)

    return output



if __name__ == '__main__':
    start = time.time()
    main()
    end = time.time()
    print(f"{end - start:.5f} sec")