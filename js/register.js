$(document).ready(function(e) {
	
	/* auth */
	$("#login").hide();
	$("#register").hide();
	$("#logout").hide();
	$("#algo").hide();
	let login = localStorage.getItem("login_ec");
	let password = localStorage.getItem("password_ec");
	if( login === null || password === null || checkUser(login, password).length == 0) {
		$("#login").show();
		$("#register").show();
		$("#logout").hide();
		$("#algo").hide();
	}else{
		$("#login").hide();
		$("#register").hide();
		$("#logout").show();
		$("#algo").show();
	}

	$("#logout").click(()=>{
		localStorage.removeItem("login_ec");
		localStorage.removeItem("password_ec");
		$("#login").show();
		$("#register").show();
		$("#logout").hide();
		$("#algo").hide();
	});


});


function registerUser() {
	$("#wrong-alert").hide();
	$("#wait-alert").show();
    let email = document.getElementById("email").value;
	let login = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	if(getByEmail(email).length != 0){
		$("#wait-alert").hide();
		$("#wrong-alert").text("Email already exists!");
		$("#wrong-alert").show();
		return;
	}

	localStorage.setItem('login_ec', login);
	localStorage.setItem('password_ec', MD5(password));
	post(email, login, password);
	window.location.href = 'algo1.html';
};