$(document).ready(function(e) {
    $("#correct-alert").text("You earn 150 algoritmiks. Open your chest to spend it!");
});
function checkAnswers() {
    let answers = ["a", "b", "b", "1", "40"];
    let forms = [
        document.getElementById("q1"),
        document.getElementById("q2"),
        document.getElementById("q3"),
        document.getElementById("q4"),
        document.getElementById("q5"),];
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
    
    let item = "item_three";
        if(!user[item]){
		user["money"] += 150;
		user[item] = true;
		put(item, user._id, true);
		put("money", user._id, user["money"]);
	}
    $("#algo3").addClass("done");
    $("#algo3_load").show();
}
