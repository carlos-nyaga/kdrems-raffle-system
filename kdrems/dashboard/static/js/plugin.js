$(document).ready(function(){
	var ShowForm = function(){
        var btn = $(this);
        var html_form = btn.attr("data-url");
		$('#modal-attendee').modal('show');
        $('#modal-attendee .modal-content').html(html_form);
		// $.ajax({
		// 	url: btn.attr("data-url"),
		// 	type: 'get',
		// 	dataType:'json',
		// 	beforeSend: function(){
		// 		$('#modal-book').modal('show');
		// 	},
		// 	success: function(data){
		// 		$('#modal-book .modal-content').html(data.html_form);
		// 	}
		// });
    };

    var SaveForm =  function(){
		var form = $(this);
		console.log(form.serialize())
		// $.ajax({
		// 	url: form.attr('data-url'),
		// 	data: form.serialize(),
		// 	type: form.attr('method'),
		// 	dataType: 'json',
		// 	success: function(data){
		// 		if(data.form_is_valid){
		// 			$('#book-table tbody').html(data.book_list);
		// 			$('#modal-book').modal('hide');
		// 		} else {
		// 			$('#modal-book .modal-content').html(data.html_form)
		// 		}
		// 	}
		// })
		// return false;
    }
    
// create 
$(".show-form").click(ShowForm);
$("#modal-attendee").on("submit",".create-form",SaveForm);

//update
$('#book-table').on("click",".show-form-update",ShowForm);
$('#modal-book').on("submit",".update-form",SaveForm)

//delete
$('#book-table').on("click",".show-form-delete",ShowForm);
$('#modal-book').on("submit",".delete-form",SaveForm)

});



// $("#loginform button[type='submit']").click(function (ev) {
//     ev.preventDefault();
//     var uname = $('#uname').val();
//     var upass = $('#upass').val();

//     data = {
//         "username": uname,
//         "password": upass,
//     };
//     console.log(uname);
//     console.log(upass);
//     console.log(data);
//     console.log("Submittttt.....");
//     LoginSubmit(data)


// });


// /*
//     Login Form Submit
// */
// function LoginSubmit(data) {
//     var token = '{{csrf_token}}';
//     $.ajax({
//         type: 'POST',
//         url: "",
//         headers: { "X-CSRFToken": token },
//         data: data,
//         success: function (response) {
//             console.log(response.status);

//         },
//         error: function (err) {
//             console.log("lalalallalla");
//             console.log(err);

//         }
//     });    
// }
