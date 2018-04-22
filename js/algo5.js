function checkAnswers() {
    let answers = ["true", "i", "j", "false", "true"];
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
    
    let item = "item_five";
    put(item, user._id);
    user[item] = true;
    $("#algo5").addClass("done");
    $("#algo5_load").show();
}
