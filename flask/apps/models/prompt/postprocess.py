global bad_answer

bad_answer = ["NA", "N/A", "NONE", " ", "NULL", "없음"]

def postprocess(output):
    if output.upper() in bad_answer:
        return "답변을 찾기 어렵습니다. 다시 질문해주시겠어요?"
    else:
        return output