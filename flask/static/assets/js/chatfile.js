
$(document).ready(() => {

    var check_mode = $('#mode option:selected').val();
    $('#file_upload').hide();

    // mode 선택
    var docs_flag = false;
    $('#mode').on('change', function () {
        var check_mode = $('#mode option:selected').val();
        if (check_mode == 'mode_docs') {
            $('#file_upload').show();
            if (docs_flag == false) {
                load_docs();
                docs_flag = true;
            }
        } else {
            $('#file_upload').hide();
        }
    });

    $('#delete_docs').on('click', function () {
        var docs = $('#file_history option:selected').val();
        console.log(docs);
        $.ajax({
            type: 'POST',
            url: '/file/delete',
            data: {
                file_delete: docs
            },
            success: function (data) {
                $('#file_history option').remove();
                $("#file_history").append(
                    '<option value="" selected disabled hidden style="font-family: gray;">문서를 선택해주세요.</option>'
                )
                load_docs();
            }
        });
    });
});


function load_docs() {
    $.ajax({
        type: 'GET',
        url: '/file/list',
        success: function (data) {

            data_dict = data.file_list
            data_dict_values = Object.values(data_dict);
            data_dict_keys = Object.keys(data_dict);
            data_dict_length = Object.keys(data_dict).length;
            for (var i = 0; i < data_dict_length; i++) {
                $("#file_history").append(
                    '<option value ='
                    + '"' + data_dict_keys[i] + '"'
                    + '>'
                    + data_dict_values[i]
                    + '</option>'
                )
            }
        }
    });
};
