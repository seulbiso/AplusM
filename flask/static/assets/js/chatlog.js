$(document).ready(() => {
function sse() {
    var source = new EventSource('/chat/stream');
    isUserMessage = false;
    messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';

    var iconDict = {
        '[IMG_INFO]' : './static/assets/images/chat/info.svg',
        '[IMG_PROMPT]' : './static/assets/images/chat/prompt.svg',
        '[IMG_DOCS]' : './static/assets/images/chat/file.svg',
        '[IMG_SEARCH]' : './static/assets/images/chat/google.svg'
    }
    var IMG_EMPTY_SRC = './static/assets/images/chat/empty.PNG'
 
    source.onmessage = function(e) {

        var data = e.data
        icon = IMG_EMPTY_SRC
        
        //search log icon 
        for (var key in iconDict){
        if (data.includes(key)){
            data = data.replace(key , '')
            icon = iconDict[key]
            break;
        }
        }

        try {
            data_json= JSON.parse(data)
            console.log(data_json)
                    
            var LOG_TYPE = data_json["LOG_TYPE"]
            var LOG_OBJECT = data_json[LOG_TYPE]

            var CONTENT = LOG_OBJECT['CONTENT'] ? LOG_OBJECT['CONTENT'] : null
            var DETAIL = LOG_OBJECT['DETAIL'] ? LOG_OBJECT['DETAIL'] : null
            var LINK = LOG_OBJECT['LINK'] ? LOG_OBJECT['LINK'] : null
            var PAGE = LOG_OBJECT['PAGE'] ? LOG_OBJECT['PAGE'] : null
        } catch (e){
            console.error(e)
        }
        


        

        $('#chat_log').prepend(
            '<div class="d-flex mb-1 ' + messageContainerClass + '">'
            + '<div style="text-align:center">'
            + '<img class="my-1 p-1" style="width:23px" src='+icon+' alt="...">'
            + '</div>'
            + '<div class="d-flex flex-column align-items-' + (isUserMessage ? 'end' : 'start') + '">'
            + '<pre class="mb-1 p-1" style="white-space: pre-wrap">'
            +  CONTENT // display the chatbot's message received from the server
            + '</pre>'
            + '</div>'
            + '</div>'
        );
    };
}
sse();
});
