from apps.storage.s3 import *
from config import Config

def yield_lines(sentence):
    lines = sentence.split('\n')
    for line in lines:
        yield line


def test():
    # s3 = s3_connection()

    # contents_list = s3_list_objects_key(s3, Config.BUCKET_NAME, '')

    # print("contents_list")
    # print(contents_list)
    # for content in contents_list:
    #     print(content)
    print(s3_get_file_path(file_name="하나은행_예금거래기본약관@20230522170245.pdf"))
    

if __name__=="__main__":
   test()