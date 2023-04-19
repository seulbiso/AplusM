# -*- coding: utf-8 -*-
import os
import sys
from apps.models.prompt.preprocess import Prompt
from apps.models.chat.basic import SimpleChat

sys.path.append(os.path.dirname(os.path.abspath(__file__)))


type = "basic"
question = "국내 전세대출 상품 중에 금리가 가장 낮은 은행 알려줘"
persona = {}
user = {}

def main():
    prompt = Prompt(type).write_prompt()
    chat = SimpleChat(prompt)
    output = chat.chain(input=question) # persona/user info 추가 시 수정 필요
    print(output)
    return output

if __name__ == '__main__':
    main()