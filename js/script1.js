


$(function() {

	$("#username_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#email_error_message").hide();
	$("#city_error_message").hide();
	$("#postal_error_message").hide();

	var error_username = false;
	var error_password = false;
	var error_retype_password = false;
	var error_email = false;
	var error_city=false;
	var error_postal = false;
	var test = false;

	$("#form_username").focusout(function() {

		check_username();
		
	});

	$("#form_password").focusout(function() {

		check_password();
		
	});

	$("#form_retype_password").focusout(function() {

		check_retype_password();
		
	});

	$("#form_email").focusout(function() {

		check_email();
		
	});
	
$("#form_city").focusout(function() {

		check_city();
		
	});
	
$("#form_postal").focusout(function() {

		check_postal();
		
	});

	function check_username() {
	
		var username_length = $("#form_username").val().length;
		
		if(username_length < 5 || username_length > 20) {
			$("#username_error_message").html("Should be between 5-20 characters");
			$("#username_error_message").show();
			error_username = true;
		} else {
			$("#username_error_message").hide();
		}
	
	}

	function check_password() {
	
		var password_length = $("#form_password").val().length;
		
		if(password_length < 8) {
			$("#password_error_message").html("At least 8 characters");
			$("#password_error_message").show();
			error_password = true
		} else {
			$("#password_error_message").hide()
		}
	
	}

	function check_retype_password() {
	
		var password = $("#form_password").val()
		var retype_password = $("#form_retype_password").val();
		
		if(password != retype_password) {
			$("#retype_password_error_message").html("Passwords don't match");
			$("#retype_password_error_message").show();
			error_retype_password = true;
		} else{
			$("#retype_password_error_message").hide();
		}
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#form_email").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}

	function check_city() {

		var city_length = $("#form_city").val().length;
		
		if(city_length < 4) {
			$("#city_error_message").html("At least 4 characters");
			$("#city_error_message").show();
			error_password = true
		} else {
			$("#city_error_message").hide()
		}
	
	}

	function check_postal() {

		var pattern = new RegExp(/^(?:[A-Z]\d[A-Z][ -]?\d[A-Z]\d)$/i);
	
		if(pattern.test($("#form_postal").val())) {
			$("#postal_error_message").hide();
		} else {
			$("#postal_error_message").html("Invalid postal address");
			$("#postal_error_message").show();
			error_email = true;
		}
	
	}
	
	jQuery(function ($) {
    $("#registration_form").validate(); 
    var number = Math.floor(Math.random() * 13);
    var number1 = Math.floor(Math.random() * 17);
    var sum = number + number1;
    $("#number").text(number);
    $("#number1").text(number1);
    $("#mathTest").click(function(){
         if (sum != $("#testInput").val())
                 {test=false;}
		else {
			test = true;
			}
    });
});

	$("#registration_form").submit(function(e) {

		e.preventDefault();
		
		
		error_username = false;
		error_password = false;
		error_retype_password = false;
		error_email = false;
		error_city = false;
		error_postal = false;
											
		check_username();
		check_password();
		check_retype_password();
		check_email();
		check_city();
		check_postal();
		
		if(test==true && error_city==false && error_postal==false && error_username==false && error_password==false && error_retype_password==false && error_email==false) {
			alert("Registered Successfully");
			var url = $(this).data('target');
		location.replace(url);
			return true;
		} else {
			alert('sorry, please try again.');
			return false;	
		}

	});

});