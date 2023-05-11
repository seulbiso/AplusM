# -*- coding: utf-8 -*-
import datetime
from pytz import timezone

class Util:

    S3_FILE_DEL = "@"

    @staticmethod
    def get_current_time():
        time_now = datetime.datetime.now(timezone('Asia/Seoul')).strftime("%Y%m%d%H%M%S")
        return time_now
    
    