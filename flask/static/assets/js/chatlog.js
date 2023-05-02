
$(document).ready(() => {
function sse() {
    var source = new EventSource('/chat/stream');
    var out = document.getElementById('chat_log');
    source.onmessage = function(e) {
        // XSS in chat is fun (let's prevent that)
        out.textContent =  e.data + '\n' + out.textContent;

        console.log("out.scrollTop before" ,out.scrollTop);
        out.scrollTop = 0;
        console.log("out.scrollTop after" ,out.scrollTop);
    };
}
sse();
});
