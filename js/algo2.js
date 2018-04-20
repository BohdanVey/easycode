function checkAnswers() {
    let answers = ["INF", "-1", "false", "0", "-1","d[j]","len"];
    let forms = [
        document.getElementById("q1"),
        document.getElementById("q2"),
        document.getElementById("q3"),
        document.getElementById("q4"),
        document.getElementById("q5"),
	document.getElementById("q6"),
	document.getElementById("q7")];
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
    
    let item = "item_one";
    put(item, user._id);
    user[item] = true;
    $("#algo2").addClass("done");
    $("#algo2_load").show();
}
