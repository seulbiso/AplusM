isUserMessage = true;

$(document).ready(() => {
    $("#submit_msg").on("click", function (e) {
        e.preventDefault();
        var message = $("#message").val();
        if (message.trim() !== "") {
            $.ajax({
                url: "/chat",
                type: "POST",
                data: { chat_Q: message },
                success: function (data) {
                    console.log("===========");
                    console.log(data.message);
                    console.log("===========");
                    var isUserMessage = true;
                    var messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';
                    $('#chat_Q').prepend(
                        '<div class="d-flex mb-6 ' + messageContainerClass + '">'
                        + '<div class="d-flex flex-column align-items-' + (isUserMessage ? 'end' : 'start') + '">'
                        + '<div class="mb-1 p-4 rounded-start rounded-bottom text-bg-primary">'
                        + message
                        + '</div>'
                        + '</div>'
                        + '<div>'
                        + '</div>'
                        + '</div>'
                    );
                    $('#message').val('');
                    isUserMessage = false;
                    messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';
                    $('#chat_Q').prepend(
                        '<div class="d-flex mb-6 ' + messageContainerClass + '">'
                        + '<div class="d-flex flex-column align-items-' + (isUserMessage ? 'end' : 'start') + '">'
                        + '<div class="mb-1 p-4 rounded-end rounded-bottom bg-gray-300">'
                        + data.chat_A // display the chatbot's message received from the server
                        + '</div>'
                        + '</div>'
                        + '<div>'
                        + '</div>'
                        + '</div>'
                    );
                },
                error: function (xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });

        }
    });

    $("#message").on("keydown", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $("#submit_msg").click();
        }
    });

    $('resetThemeConfig').on("click", function (e) {
        $.ajax({
            url: "/chat",
            type: "GET"
        });
    });

    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbar-toggle');

    // navbarToggle.addEventListener('click', function () {
    //     if (navbar.classList.contains('show')) {
    //         navbar.classList.remove('show');
    //     } else {
    //         navbar.classList.add('show');
    //     }
    // });

});
