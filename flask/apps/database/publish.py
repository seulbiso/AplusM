from flask import session , current_app
import datetime

from apps.database.session import cache




class Pubsub:

    @classmethod
    def publish_channel_name(cls, channel, prefix = None) :
        channel = str(channel)
        return prefix + ':' + channel if prefix is not None else channel


    @classmethod
    def publish(cls, message, channel ,red = cache):
        '''
        publish message on channel
        channel : redis channel name / default chat_log:{session_number}
        message : message 
        '''
        red.publish(channel=channel, message=message) 
            
        
        

class PubsubChatLog(Pubsub):

    @classmethod
    def publish_channel_name(cls):
        '''
        GET redis channel name => chat_log:{session_number}
        '''
        prefix = 'chat_log'
        channel = session['session_number']
        return super().publish_channel_name(prefix=prefix,channel=channel)


    @classmethod
    def publish(cls, message):
        '''
        publish message on channel
        channel : redis channel name / default chat_log:{session_number}
        message : message 
        '''
  
        channel=cls.publish_channel_name()
        
        now = datetime.datetime.now().replace(microsecond=0).time()
        message = u'[%s] %s' % (now,message)

        super().publish(message=message, channel=channel, red=cache)
    