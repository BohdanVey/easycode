$(document).ready(function(e) {
    $("#correct-alert").text("You earn 200 algoritmiks. Open your chest to spend it!");
});
function checkAnswers() {
    let answers = ["b", "y1", "d", "2", "1"];
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
    
    let item = "item_nine";
    if(!user[item]){
		user["money"] += 200;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    $("#algo9").addClass("done");
    $("#algo9_load").show();
}
