function checkAnswers() {
    let answers = ["k", "n", "res", "1", "3"];
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
    
    let item = "item_ten";
    put(item, user._id);
    user[item] = true;
    $("#algo10").addClass("done");
    $("#algo10_load").show();
}
