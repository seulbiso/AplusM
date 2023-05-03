
$(document).ready(() => {
    $("#submit_msg").on("click", function (e) {
        e.preventDefault();
        var message = $("#message").val();
        var check_user_info_name = $('#user_info_name').val();
        var check_sex = $('input[name="user_info_sex"]:checked').val();
        var check_persona = $('input[name="persona_choice"]:checked').val();
        var check_user_info_age = $('#user_info_age option:selected').val();
        var check_user_info_job = $('#user_info_job option:selected').val();
        var check_user_info_hobby = $('#user_info_hobby').val();
        var user_info = {"user_info_name":check_user_info_name,"user_info_age": check_user_info_age, "user_info_sex":check_sex,"user_info_job": check_user_info_job,"user_info_hobby": check_user_info_hobby};
        var check_model = $('input[name="model_select"]:checked').val();
        
        if (message.trim() !== "") {
            $.ajax({
                url: "/chat",
                type: "POST",
                //user 정보, Persona 정보, 메시지 값
                data: { chat_Q: message,
                        user_info: JSON.stringify(user_info),
                        persona: check_persona,
                        check_model : check_model
                },
                success: function (data) {
                    
                    //bot 채팅화면
                    isUserMessage = false;
                    messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';
                    $('#loading2').remove();
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

        // user 채팅화면
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
        
        // 대화 Loading 기다리는 표시
        isUserMessage = false;
        messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';
        $('#chat_Q').prepend(
            '<div id = "loading2"></div>'
        )

        $('#loading2').append(
            '<div class="d-flex' + messageContainerClass + '">'
            + '<div class="d-flex flex-column align-items-' + (isUserMessage ? 'end' : 'start') + '">'
            + '<div class="d-flex justify-content-bottom mb-6">'
            + ' <div class="mb-1 p-4 rounded-start rounded-end bg-gray-300" style="display:inline-block"><span class= "typing"></span><span class= "typing"></span></div>'
            + '</div>'
            + '</div>'
            + '</div>'
        );

        //메시지 입력 후 초기화
        if (message) {
            $("#message").val("");
        }
    });


    // Enter로 메시지 입력
    $("#message").on("keydown", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $("#submit_msg").click();
        }
    });

    // 화면 리셋 버튼
    $('resetThemeConfig').on("click", function (e) {
        $.ajax({
            url: "/",
            type: "GET"
        });
    });

    // 페르소나 Default 값 설정
    $('#persona_one').prop("checked", true);

    // 페르소나 선택 시, 값 변경
    $('input[type="radio"]').on('change', function () {
        var check_persona = $('input[name="persona_choice"]:checked').val();
    });

    // user 성별 선택 시, 값 변경
    $('input[type="radio"]').on('change', function () {
        var check_sex = $('input[name="user_info_sex"]:checked').val();
    });

    // user 나이 선택 시, 값 변경
    $('#user_info_age').on('change', function () {
        var check_user_info_age = $('#user_info_age option:selected').val();
    });

    // user 직업 선택 시, 값 변경
    $('#user_info_job').on('change', function () {
        var check_user_info_job = $('#user_info_job option:selected').val();
    });

    //model 선택
    $('resetThemeConfig').on("click", function (e) {
        var check_model = $('input[name="model_select"]:checked').val();
    });
});
