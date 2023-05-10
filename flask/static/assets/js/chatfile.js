
$(document).ready(() => {


    $("#file_history").on("change", function() {
        if ($(this).val() !== "") {
          $(this).parent().append('<button class="delete-file" style="margin-left: 10px;">X</button>');
        }
      });
      
      $(document).on("click", ".delete-file", function() {
        var fileName = $("#file_history option:selected").text();
        // 파일 삭제하는 AJAX 요청 코드 작성
        $(this).siblings("#file_history").val("");
        $(this).remove();
      });
      
    // $("#uploaddocs").on("click", function (e) {
    //     var form = new FormData();
    //     form.append("file", $("#file")[0].files[0]);
    //     console.log(form);
    //     $.ajax({
    //         url: "/file/upload"
    //         , type: "POST"
    //         , processData: false
    //         , contentType: false
    //         , data: form
    //         , success: function (response) {
    //             alert("성공하였습니다.");
    //             console.log(response);
    //         }
    //         ,
    //         error: function (xhr, status, error) {
    //             console.log(xhr.responseText);
    //         }
    //     });
    // });
});
