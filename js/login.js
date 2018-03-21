$(document).ready(function (e) {
	getAll();
	function Register() {
    var email = document.getElementById("email");
	var login = document.getElementById("name");
	var password = document.getElementById("password");
	postnew(email,login,password)
}

});