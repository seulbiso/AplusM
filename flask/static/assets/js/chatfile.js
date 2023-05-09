
$(document).ready(() => {

    $("#uploaddocs").on("click", function (e) {
        var form = new FormData();
        form.append("file", $("#file")[0].files[0]);
        console.log(form);
        $.ajax({
            url: "/file/upload"
            , type: "POST"
            , processData: false
            , contentType: false
            , data: form
            , success: function (response) {
                alert("성공하였습니다.");
                console.log(response);
            }
            ,
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });
});
