$(document).ready(() => {
    $("#submit_msg").on("click", function (e) {
        e.preventDefault();
        var message = $("#message").val();
        var check_user_info_name = $('#user_info_name').val();
        var check_sex = $('input[name="user_info_sex"]:checked').val();
        var check_persona = $('input[name="persona_choice"]:checked').val();
        var check_user_info_age = $('#user_info_age option:selected').val();
        var check_user_info_job = $('#user_info_job option:selected').val();
        var user_info = {"user_info_name":check_user_info_name,"user_info_age": check_user_info_age, "user_info_sex":check_sex,"user_info_job": check_user_info_job};

        console.log(check_persona);
        console.log(check_sex);
        console.log(message);
        if (message.trim() !== "") {
            $.ajax({
                url: "/chat",
                type: "POST",
                data: { chat_Q: message,
                        user_info: "tesxt",
                        user_info: JSON.stringify(user_info),
                        persona: check_persona
                },
                success: function (data) {
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

        if (message) {
            $("#message").val("");
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
            url: "/",
            type: "GET"
        });
    });

    $('#persona_one').prop("checked", true);
    

    $('input[type="radio"]').on('change', function () {
        var check_persona = $('input[name="persona_choice"]:checked').val();
        console.log(check_persona);
    });

    $('input[type="radio"]').on('change', function () {
        var check_sex = $('input[name="user_info_sex"]:checked').val();
        console.log(check_sex);
    });


    $('#user_info_age').on('change', function () {
        var check_user_info_age = $('#user_info_age option:selected').val();
        console.log(check_user_info_age);
    });

    $('#user_info_job').on('change', function () {
        var check_user_info_job = $('#user_info_job option:selected').val();
        console.log(check_user_info_job);
    });
});
