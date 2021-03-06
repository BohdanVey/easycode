let user = null;
$(document).ready(function(e) {
	
	/* auth */
	let login = localStorage.getItem("login_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(login, password);
	if( login === null || password === null || result.length == 0) {
		$("#login").show();
		$("#register").show();
		$("#logout").hide();
		$("#algo").hide();
		$("#money-list").hide();
		$("#chest").hide();
	}else{
		user = result[0];
		$("#login").hide();
		$("#register").hide();
		$("#logout").show();
		$("#algo").show();
		$("#money-list").show();
		$("#chest").show();
		$("#money").text(user.money);	
	}

	$("#logout").click(()=>{
		localStorage.removeItem("login_ec");
		localStorage.removeItem("password_ec");
		$("#login").show();
		$("#register").show();
		$("#logout").hide();
		$("#algo").hide();
		$("#money-list").hide();
		$("#chest").hide();
	});
});


function loginUser() {
	$("#wrong-alert").hide();
	$("#wait-alert").show();
	let login = document.getElementById("name").value;
	let password = document.getElementById("password").value;
    
    let result = checkUser(login, MD5(password));
	if( login === null || password === null || result.length == 0) {
        $("#wait-alert").hide();
        $("#wrong-alert").show();
		return;
	}

	localStorage.setItem('login_ec', login);
	localStorage.setItem('password_ec', MD5(password));
	window.location.href = 'algo1.html';
};