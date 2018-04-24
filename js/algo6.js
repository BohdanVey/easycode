function checkAnswers() {
    let answers = ["<", "z[i]", "z[i]", "z", "021"];
    let forms = [
        document.getElementById("q1"),
        document.getElementById("q2"),
        document.getElementById("q3"),
        document.getElementById("q4"),
        document.getElementById("q5")];
    for(let i = 0; i < forms.length; i++){
        if(forms[i].value != answers[i]){
            // Wrong
            $("#correct-alert").hide();
            $("#wrong-alert").show();
            $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
            return;
        }
    }
    // Correct
    $("#wrong-alert").hide();
    $("#correct-alert").show();
    $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
    
    let item = "item_six";
    if(!user[item]){
		user["money"] += 250;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    $("#algo6").addClass("done");
    $("#algo6_load").show();
}
