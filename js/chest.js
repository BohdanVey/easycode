let user = null;
$(document).ready(function(e) {
	$(".left-bar").toggle();
    /* auth */
	let login = localStorage.getItem("login_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(login, password);
	if( login === null || password === null || result.length == 0) {
		window.location.href = 'login.html';
	}
    user = result[0]; 
    
    // TODO: remove
	// user = {
	// 	money: 300,
	// 	item_one: true,
	// 	item_two: true,
	// 	item_three: true,
    // }

    $("#money").text(user.money);

    let items = ["item_one", "item_two", "item_three", "item_four", "item_five", 
    "item_six", "item_seven", "item_eight", "item_nine", "item_ten"];
    for(let i = 0; i < items.length; i++){
        if(user[items[i]]){
            $("#" + items[i]).addClass("done");
        }
    }
    
	$("#logout").click(()=>{
		localStorage.removeItem("login_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
    $("#expand").click(function() {
        $(".left-bar").slideToggle();
    });
});

function confirm(item, name, cost){
    if(user[item]==true){
        $("#correct-alert").hide();
        $("#wrong-alert").text("You already have this algorithm!");
        $("#wrong-alert").show();
        $('html,body').animate({scrollTop: document.body.scrollHeight}, "slow");
        return;
    }


    $("#conf-text").html("Do you really want to buy <b>"+ name +"</b>?<br/>(<b>" + cost + "</b> Algoritmiks)");
    $("#back").height($(document).height());
    $("#back").width($(document).width());
    $("#back").show();
    $("#conf").css("display", "flex");


    $("#conf-ok").unbind().click((e)=>{
        buy(item, cost)
        $("#back").hide();
        $("#conf").hide();
    });
    $("#conf-cancel").unbind().click((e)=>{
        $("#back").hide();
        $("#conf").hide();
    });

}


function buy(item, cost){
    if(!user){
        $("#correct-alert").hide();
        $("#wrong-alert").text("You are not logged in!");
        $("#wrong-alert").show();
        $('html,body').animate({scrollTop: document.body.scrollHeight}, "slow");
        return;       
    }
    if(user["money"] - cost < 0){
        $("#correct-alert").hide();
        $("#wrong-alert").text("You don`t have enough money!");
        $("#wrong-alert").show();
        $('html,body').animate({scrollTop: document.body.scrollHeight}, "slow");
        return;
}
    if(!user[item]){
        user["money"] -= cost;
        user[item] = true;
        put(item, user._id, true);
        put("money", user._id, user["money"]);
        $("#money").text(user.money);
	$("#" + item).addClass("done");
        $("#correct-alert").text("Success!");
        $("#correct-alert").show();
        $("#wrong-alert").hide();
    }
}
