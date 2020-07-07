$(function() {

$("#username_error_message").hide(); // hide and para and ;
$("#password_error_message").hide(); // hide and para

var error_username = false; // spell of false
var error_password = false; // spell of false

$("#form_username").focusout(function() {

check_username();

});

$("#form_password").focusout(function() {

check_password();

});

function check_username() { // spell of function

var username_length = $("#form_username").val().length;

if(username_length < 5 || username_length > 20) { // spell of username
$("#username_error_message").html("Should be between 5-20 characters");
$("#username_error_message").show(); // spell of show
error_username = true;
} else {
$("#username_error_message").hide(); // spell of hide
}

}

function check_password() { // spell of function and check_password

var password_length = $("#form_password").val().length;

if(password_length < 8) { // spell of if
$("#password_error_message").html("At least 8 characters");
$("#password_error_message").show();
error_password = true; //; is missing
} else {
$("#password_error_message").hide(); // ; is missing
}

}

$("#login_form").submit(function() {

error_username = false;
error_password = false;

check_password();

check_username(); // missing ;

if(error_username==false && error_password==false) {
return true;
} else {
return false; // spell of false
}

});

});