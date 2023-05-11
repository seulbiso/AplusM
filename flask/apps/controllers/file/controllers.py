from flask import Blueprint, request, jsonify, current_app, session
import re

from config import Config
from apps.common.util import Util
from apps.common.response import *
from apps.storage.s3 import *

app = Blueprint('file', __name__, url_prefix='/file')


@app.route('/upload', methods=['POST'])
def upload():
    current_app.logger.info("POST /file/upload")
    s3 = s3_connection()

    for key in request.files.keys():
        file = request.files[key]
        current_app.logger.info(f"REQUEST PRARM {file}")
    
        filename , filetype = file.filename.split('.')
        timestamp = Util.get_current_time()
        filedelimiter = Util.S3_FILE_DEL
        filepath = f"{Config.BUCKET_FODLER}/{filename}{filedelimiter}{timestamp}.{filetype}"
        current_app.logger.info(f"UPLOAD FILE INFO FILE PATH : {filepath}")

        if not s3_put_object(s3=s3,bucket=Config.BUCKET_NAME,file=file,path=filepath):
            current_app.logger.error("FAIL S3 PUT OBJECT")
            return error(50000)

        current_app.logger.info("SUCCESS S3 PUT OBJECT")
        
    return ok()

@app.route('/list', methods=['GET'])
def list():
    current_app.logger.info("GET /file/list")
    s3 = s3_connection()
    prefix = 'description/'
    contents_list = s3_list_objects_key(s3, Config.BUCKET_NAME, prefix)

    file_dict = {}  
    expression = r"^(.+)"+Util.S3_FILE_DEL+ r"(.+)\.(\w+)$"
    for content in contents_list:
        if prefix in content :
            # filename_full => filename:timestamp.filetype
            # filename_notimestamp => filename.filetype
            filename_full = content.split('/')[-1] 
            w = re.search(expression,filename_full)
            if w is not None:
                filename,timestamp,filetype = w.groups()
            
                filename_notimestamp = f"{filename}.{filetype}"
                file_dict[filename_full] = filename_notimestamp
            
    
    response = {
        'file_list' : file_dict
    }

    return jsonify(response)


@app.route('/delete', methods=['POST'])
def delete():
    current_app.logger.info("POST /file/delete")
    file_delete = request.form['file_delete']
    current_app.logger.info(f"REQUEST PRARM {file_delete}")

    s3 = s3_connection()
    prefix = 'description/'
    contents_list = s3_list_objects_key(s3, Config.BUCKET_NAME, prefix)
    
    keys_delete = []
    for content in contents_list:
        if file_delete in content:
            current_app.logger.info(f"DELETE FILE INFO FILE PATH : {content}")
            keys_delete.append(content)
    
    if not s3_delete_objects(s3=s3, bucket=Config.BUCKET_NAME, keys=keys_delete):
       current_app.logger.error("FAIL S3 DELETE OBJECT")
       return error(50000)

    current_app.logger.info("SUCCESS S3 DELETE OBJECT")
    return ok()
