function registerUser() {
    let email = document.getElementById("email").value;
	let login = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	console.log(email);
	let result = getByEmail(email);
	console.log(result);
	if(result.length != 0){
		alert("Email exists!");
		return;
	}
	post(email, login, password);
};
