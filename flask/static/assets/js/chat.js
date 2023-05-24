
$(document).ready(() => {
    
    $("#submit_msg").on("click", function (e) {
        e.preventDefault();
        var message = $("#message").val();
        var check_user_info_name = $('#user_info_name').val();
        var check_sex = $('#user_info_sex option:selected').val();
        var check_persona = $('input[name="persona_choice"]:checked').val();
        var check_user_info_age = $('#user_info_age option:selected').val();
        var check_user_info_job = $('#user_info_job option:selected').val();
        var check_user_info_hobby = $('#user_info_hobby').val();
        var user_info = {"user_info_name":check_user_info_name,"user_info_age": check_user_info_age, "user_info_sex":check_sex,"user_info_job": check_user_info_job,"user_info_hobby": check_user_info_hobby};
        var check_mode =  $('#mode option:selected').val();
        var docs = "";
        docs = $('#file_history option:selected').val();

        check_user_info_name = "소"
        check_sex = "여자"
        check_user_info_age = "20대"
        check_user_info_job = "개발자"
        check_user_info_hobby = "공부"


        if (message.trim() !== "") {
            $.ajax({
                url: "/chat",
                type: "POST",
                //user 정보, Persona 정보, 메시지, MODE 선택 값
                data: { chat_Q: message,
                        user_info: JSON.stringify(user_info),
                        persona: check_persona,
                        mode : check_mode,
                        docs :  docs
                },
                success: function (data) {
                    
                    //bot 채팅화면
                    isUserMessage = false;
                    messageContainerClass = isUserMessage ? 'user-message' : 'bot-message';
                    $('#loading2').remove();
                    $('#chat_Q').prepend(
                        '<div class="d-flex mb-6 ' + messageContainerClass + '">'
                        + '<div class="d-flex flex-column align-items-' + (isUserMessage ? 'end' : 'start') + '">'
                        // + '<div class="mb-1 p-4 rounded-end rounded-bottom bg-gray-300">'
                        + '<pre class="mb-1 p-4 rounded-end rounded-bottom bg-gray-300" style="white-space: pre-wrap">'
                        + data.chat_A // display the chatbot's message received from the server
                        + '</pre>'
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
    $('#refresh').on('click', function() {
        window.location.href = '/';
      });

    // 페르소나 Default 값 설정
    $('#persona_one').prop("checked", true);

    // 페르소나 선택 시, 값 변경
    $('input[type="radio"]').on('change', function () {
        var check_persona = $('input[name="persona_choice"]:checked').val();
    });

    // user 성별 선택 시, 값 변경
    $('#user_info_sex').on('change', function () {
        var check_sex = $('#user_info_sex option:selected').val();
    });

    // user 나이 선택 시, 값 변경
    $('#user_info_age').on('change', function () {
        var check_user_info_age = $('#user_info_age option:selected').val();
    });

    // user 직업 선택 시, 값 변경
    $('#user_info_job').on('change', function () {
        var check_user_info_job = $('#user_info_job option:selected').val();
    });

    var check_mode = $('#mode option:selected').val();
     $('#file_upload').hide();
    
    

    // mode 선택
    $('#mode').on('change', function () {
        var check_mode = $('#mode option:selected').val();
        if(check_mode == 'mode_docs'){
            $('#file_upload').show();
        }else{
            $('#file_upload').hide();
        }
    });
});
