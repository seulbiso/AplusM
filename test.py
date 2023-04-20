# -*- coding: utf-8 -*-
import os
import sys
from apps.models.prompt.preprocess import Prompt
from apps.models.chat.basic import SimpleChat

sys.path.append(os.path.dirname(os.path.abspath(__file__)))


mode = "basic"
chat_Q = "여의도에서 5명이 인당 4만원으로 먹을 수 있는 제일 맛있는 음식점 3가지 알려줘."
persona = {}
user_info = {}

def main():
    prompt = Prompt(mode).write_prompt()
    chat = SimpleChat(prompt)
    output = chat.chain(chat_Q) # persona/user info 추가 시 수정 필요
    print(output)
    return output

if __name__ == '__main__':
    main()