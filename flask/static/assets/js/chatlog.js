$(document).ready(() => {
function sse() {
    var source = new EventSource('/chat/stream');
    isUserMessage = false;
    messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';
    source.onmessage = function(e) {

        $('#chat_log').prepend(
            '<div class="d-flex mb-1 ' + messageContainerClass + '">'
            + '<div class="d-flex flex-column align-items-' + (isUserMessage ? 'end' : 'start') + '">'
            + '<pre class="mb-1 p-1" style="white-space: pre-wrap">'
            +  e.data // display the chatbot's message received from the server
            + '</pre>'
            + '</div>'

            + '</div>'
        );
    };
}
sse();
});
