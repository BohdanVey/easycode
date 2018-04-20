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