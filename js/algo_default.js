let user = null;
$(document).ready(function(e) {
	$(".left-bar").toggle();
	$("#correct-alert").hide();
    $("#wrong-alert").hide();

    /* auth */
	let login = localStorage.getItem("login_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(login, password);
	if( login === null || password === null || result.length == 0) {
		window.location.href = 'login.html';
	}
	user = result[0]; // set user
	//TODO: remove
	// user = {
	// 	item_one: true,
	// 	item_two: true,
	// 	item_three: true,
	// }

	// get avaliable algorithms
	if(user.item_one)
		$("#algo1").addClass("done");
	else
		$("#algo1_load").hide();


	if(user.item_two)
		$("#algo2").addClass("done");
	else
		$("#algo2_load").hide();


	if(user.item_three)
		$("#algo3").addClass("done");
	else
		$("#algo3_load").hide();
	if(user.item_four)
		$("#algo4").addClass("done");
	else
		$("#algo4_load").hide();
	if(user.item_five)
		$("#algo5").addClass("done");
	else
		$("#algo5_load").hide();
	if(user.item_six)
		$("#algo6").addClass("done");
	else
		$("#algo6_load").hide();
	if(user.item_seven)
		$("#algo7").addClass("done");
	else
		$("#algo7_load").hide();
	if(user.item_eight)
		$("#algo8").addClass("done");
	else
		$("#algo8_load").hide();
	if(user.item_nine)
		$("#algo9").addClass("done");
	else
		$("#algo9_load").hide();
	if(user.item_ten)
		$("#algo10").addClass("done");
	else
		$("#algo10_load").hide();
	if(user.item_eleven)
		$("#algo11").addClass("done");
	else
		$("#algo11_load").hide();


	// logot button
	$("#logout").click(()=>{
		localStorage.removeItem("login_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
    $("#expand").click(function() {
        $(".left-bar").slideToggle();
    });
});
