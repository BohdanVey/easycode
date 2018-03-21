$(document).ready(function(e) {
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://easycode-bee9.restdb.io/rest/easycode",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "34f2f3085db451b7c636b2ea04d997ab0eb47",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
	
	
	
	
	
	
    let expanded = false;
	 $(".left-bar").toggle();
	 $(".info").css('width', '100%');
    $("#expand").click(function() {
        $(".left-bar").toggle();
        if(expanded){
            $(".info").css('width', '100%');
        }
        else{
            $(".info").css('width', '80%');
        }
        expanded = !expanded;
    });
    $("#expand2").click(function() {
        $(".left-bar").toggle();
        if(expanded){
            $(".info").css('width', '100%');
        }
        else{
            $(".info").css('width', '60%');
        }
        expanded = !expanded;
    });
	$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (name == '' || email == '' || password == '' || cpassword == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 8) {
alert("Password should atleast 8 character in length...!!!!!!");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
} else {
$.post("register.php", {
name1: name,
email1: email,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("form")[0].reset();
}
alert(data);
});
}
});
 });