from flask import Blueprint, request, jsonify, current_app, session
import datetime
from pytz import timezone

from config import Config
from apps.common.response import *
from apps.storage.s3 import *

app = Blueprint('file', __name__, url_prefix='/file')


@app.route('/upload', methods=['POST'])
def upload():
    s3 = s3_connection()

    file = request.files['file']
    filename = file.filename.split('.')[0]
    filepath = f"description/{filename}"

    if not s3_put_object(s3=s3,bucket=Config.BUCKET_NAME,file=file,path=filepath):
        return error(50000)

    return ok

@app.route('/list', methods=['GET'])
def list():

    s3 = s3_connection()
    contents_list = s3_list_objects_key(s3, Config.BUCKET_NAME, '')

    response = {
        'file_list' : contents_list
    }

    return jsonify(response)


