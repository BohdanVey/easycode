let user = null;
$(document).ready(function(e) {
	$(".left-bar").toggle();
	$("#correct-alert1").hide();
    $("#wrong-alert1").hide();
	  $("#wrong-alert2").hide();
    /* auth */
	let login = localStorage.getItem("login_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(login, password);
	if( login === null || password === null || result.length == 0) {
		window.location.href = 'login.html';
	}
	user = result[0]; 
	$("#logout").click(()=>{
		localStorage.removeItem("login_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
    $("#expand").click(function() {
        $(".left-bar").slideToggle();
    });
});
function buy1() {
       let item="item_one";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-300<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 300;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo1").addClass("done");
}
function buy2() {
       let item="item_two";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-700<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 700;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo2").addClass("done");

}

function buy3() {
       let item="item_three";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-200<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 200;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo3").addClass("done");

}

function buy4() {
       let item="item_four";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-700<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 700;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo4").addClass("done");
}

function buy5() {
       let item="item_five";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-400<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 400;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo5").addClass("done");
 
}

function buy6() {
       let item="item_six";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-350<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 350;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo6").addClass("done");
}
function buy7() {
       let item="item_seven";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-200<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 200;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo7").addClass("done");
    }
function buy8() {
       let item="item_eight";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-350<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 350;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo8").addClass("done");
    }
function buy9() {
       let item="item_nine";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert2").show();
	  		$("#wrong-alert1").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-300<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 300;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo9").addClass("done");
    }
function buy10() {
       let item="item_ten";
            // Wrong
	if(user[item]==true){
            $("#correct-alert1").hide();
            $("#wrong-alert1").show();
	  		$("#wrong-alert2").hide();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
		if(user["money"]-200<0){
            $("#correct-alert1").hide();
            $("#wrong-alert1").hide();
	  		$("#wrong-alert2").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
	}
   if(!user[item]){
		user["money"] -= 200;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    
    $("#algo10").addClass("done");
    }