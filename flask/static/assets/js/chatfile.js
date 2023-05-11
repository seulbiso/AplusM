



$(document).ready(() => {


    // // Handle click on delete icon
    // $('.delete-icon').click(function (event) {
    //     event.stopPropagation(); // Prevent the dropdown from closing
    //     $('#myModal').modal('show');
    // });

    // // Handle click on dropdown item
    // $('.dropdown-item').click(function () {
    //     var value = $(this).data('value');
    //     $('#dropdownMenuButton').text(value);
    // });


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
            console.log(docs_flag);
        } else {
            $('#file_upload').hide();
        }
    });

    // // Add "X" image and text to each option
    // $('#file_select option').each(function () {
    //     var optionText = $(this).text();
    //     $(this).html(optionText + ' <img class="delete-option" src="./static/assets/favicon/x_logo.png" alt="Delete">');
    // });

    // // Handle click event on "X" image
    // $(document).on('click', '.delete-option', function () {
    //     var optionValue = $(this).closest('option').val();
    //     var optionText = $(this).closest('option').text();

    //     // Show modal with option information and delete confirmation
    //     // Replace the code below with your own modal implementation
    //     showModal(optionText, function () {
    //         // Delete the option from the select box
    //         $('#file_select option[value="' + optionValue + '"]').remove();
    //     });
    // });

    // // Function to show the modal
    // function showModal(text, callback) {
    //     // Replace the code below with your own modal implementation
    //     console.log('Delete option: ' + text);
    //     if (confirm('Are you sure you want to delete this option?')) {
    //         callback();
    //     }
    // }
});

// $(document).on("click", ".delete-icon", function() {
//     $(this).closest("option").remove();
//   });





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