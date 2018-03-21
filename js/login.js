function registerUser() {
    var email = document.getElementById("email").value;
	var login = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	console.log(email);
	post(email, login, password);
};