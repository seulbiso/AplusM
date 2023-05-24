$(document).ready(() => {
    function sse() {
        var source = new EventSource('/chat/stream');
        isUserMessage = false;
        messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';

        var iconDict = {
            'INFO': './static/assets/images/chat/info.svg',
            'PROMPT': './static/assets/images/chat/prompt.svg',
            'DOCS': './static/assets/images/chat/file.svg',
            'SEARCH': './static/assets/images/chat/google.svg',
            '[IMG_INFO]': './static/assets/images/chat/info.svg',
            '[IMG_PROMPT]': './static/assets/images/chat/prompt.svg',
            '[IMG_DOCS]': './static/assets/images/chat/file.svg',
            '[IMG_SEARCH]': './static/assets/images/chat/google.svg'
        }
        var IMG_EMPTY_SRC = './static/assets/images/chat/empty.PNG'


        source.onmessage = function (e) {

            var data = e.data
            icon = IMG_EMPTY_SRC
            var LOG_TYPE = "DOCS"
            var LINK = "https://www.naver.com"
            var PAGE = "3"
            var CONTENT = "컨텐츠 입니다."
            var DETAIL = "NULL"
            //search log icon 

            // for (var key in iconDict) {
            //     if (data.includes(key)) {
            //         data = data.replace(key, '')
            //         icon = iconDict[key]
            //         break;
            //     }
            // }

            icon = iconDict[LOG_TYPE]

            //docs url link
            $('#chat_log').prepend(
                '<div class="d-flex mb-1 ' + messageContainerClass + '">'
                + '<div style="text-align:center">'
                + '<img class="my-1 p-1" style="width:23px" src=' + icon + ' alt="...">'
                + '</div>'
                + '<div class="d-flex flex-column align-items-' + (isUserMessage ? 'end' : 'start') + '">'
                + '<pre class="mb-1 p-1" style="white-space: pre-wrap">'
                + data // display the chatbot's message received from the server
                // + CONTENT // display the chatbot's message received from the server
                + '</pre>'
                + '<pre class="mb-1 p-4 rounded-end rounded-bottom bg-gray-300" style="white-space: pre-wrap" id="log_detail">'
                + '</div>'
                + '</div>'
            );

            $('#log_detail').hide();

            // 요약한 정보를 문서에서 찾았을 경우, 해당 페이지 링크 및 디테일한 정보 보여줌
            if (icon == './static/assets/images/chat/file.svg') { // test용
                // if(DETAIL != "NULL"){ <- 바꿀거
                $('#log_detail').prepend(
                    DETAIL
                    + '</pre>'
                );

                $('#log_detail').after(
                    '<a href="'
                    + LINK
                    // + 'page='
                    // + PAGE
                    + '" target="_blank"> 자세히..</a>'
                );

                $('#log_detail').show();
            }ㄴ
        };
    }

    sse();

});
