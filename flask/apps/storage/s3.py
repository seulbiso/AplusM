import boto3
from config import Config
import logging


def s3_connection():
    '''
    s3 bucket 연결
    :return: 연결된 s3 객체
    '''
    try:
        s3 = boto3.client( 
            service_name='s3',
            region_name=Config.AWS_S3_BUCKET_REGION,
            aws_access_key_id=Config.AWS_ACCESS_KEY,
            aws_secret_access_key=Config.AWS_SECRET_ACCESS_KEY
        )

    except Exception as e:
        logging.exception(e)
        #exit(ERROR_S3_CONNECTION_FAILED)
    else :
        logging.info("S3 BUCKET CONNECTED!")
        return s3
    

def s3_put_object(s3, bucket, file, path):
    '''
    s3 bucket에 지정 파일 업로드
    :param s3: 연결된 s3 객체(boto3 client)
    :param bucket: 버킷명
    :param file: 파일 객체
    :param path: 파일 경로
    :return: 성공 시 True, 실패 시 False 반환
    '''
    try:
        s3.put_object(Bucket=bucket, 
                      Body =file,
                      Key = path, 
                      ContentType = file.content_type)
    except Exception as e:
        logging.exception(e)
        return False
    return True   


def s3_get_object(s3, bucket, object_name, file_name):
    '''
    s3 bucket에서 지정 파일 다운로드
    :param s3: 연결된 s3 객체(boto3 client)
    :param bucket: 버킷명
    :param object_name: s3에 저장된 object 명
    :param file_name: 저장할 파일 명(path)
    :return: 성공 시 True, 실패 시 False 반환
    '''
    try:
        s3.download_file(bucket, object_name, file_name)
    except Exception as e:
        logging.exception(e)
        return False
    return True


def s3_list_objects(s3, bucket, prefix):
    '''
    s3 bucket 특정 경로 파일 리스트 
    :param s3: 연결된 s3 객체(boto3 client)
    :param bucket: 버킷명
    :param prefix: s3에 저장된 object 명
    :return: S3 파일 리스트 객체
    '''
    try :
        obj_list = s3.list_objects(Bucket=bucket, Prefix=prefix)['Contents']
    except Exception as e:
        logging.exception(e)

    return obj_list

def s3_list_objects_key(s3, bucket, prefix):
    '''
    s3 bucket 특정 경로 파일 리스트 
    :param s3: 연결된 s3 객체(boto3 client)
    :param bucket: 버킷명
    :param prefix: s3에 저장된 object 명
    :return: S3 파일 리스트 객체 KEY (파일명)
    '''
    key_list = []
    obj_list = s3_list_objects(s3,bucket,prefix)
    print("s3_list_objects")
    print(obj_list)
    if obj_list is not None:
        for obj in obj_list:
            key = obj['Key']
            idx = key.rindex('/')
            # 파일 최종 경로가 prefix 거나, key 자체가 prefix 아닐때 저장
            print("key[0:idx + 1]")
            print(key[0:idx + 1])
            key_list.append(key)
    

    return key_list








    
