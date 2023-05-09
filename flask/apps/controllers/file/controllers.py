from flask import Blueprint, request, jsonify, current_app, session
import logging

from config import Config
from apps.common.response import *
from apps.storage.s3 import *

import pprint

app = Blueprint('file', __name__, url_prefix='/file')


@app.route('/upload', methods=['POST'])
def upload():
    current_app.logger.info("POST /upload")
    s3 = s3_connection()

    for key in request.files.keys():
        file = request.files[key]
    
        filename , filetype = file.filename.split('.')

        timestamp = Config.get_current_time()
        filepath = f"{Config.BUCKET_FODLER}/{filename}:{timestamp}.{filetype}"

        current_app.logger.info(f"UPLOAD FILE INFO FILE PATH : {filepath}")

        if not s3_put_object(s3=s3,bucket=Config.BUCKET_NAME,file=file,path=filepath):
            current_app.logger.error("FAIL S3 PUT OBJECT")
            return error(50000)

        current_app.logger.info("SUCCESS S3 PUT OBJECT")
    return ok()

@app.route('/list', methods=['GET'])
def list():

    s3 = s3_connection()
    contents_list = s3_list_objects_key(s3, Config.BUCKET_NAME, '')

    response = {
        'file_list' : contents_list
    }

    return jsonify(response)


