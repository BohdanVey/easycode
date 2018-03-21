$(document).ready(function(e) {
    let expanded = false;
	 $(".left-bar").toggle();
	 $(".info").css('width', '100%');
    $("#expand").click(function() {
        $(".left-bar").toggle();
        if(expanded){
            $(".info").css('width', '100%');
        }
        else{
            $(".info").css('width', '80%');
        }
        expanded = !expanded;
    });
    $("#expand2").click(function() {
        $(".left-bar").toggle();
        if(expanded){
            $(".info").css('width', '100%');
        }
        else{
            $(".info").css('width', '60%');
        }
        expanded = !expanded;
    });
 });
function Answer() {
    var x = document.getElementById("frm1");
	var y = document.getElementById("frm2");
	var z = document.getElementById("frm3");
	if(x[0].value=="2" && y[0].value=="1" && z[0].value=="2"){
		alert("TRUE")
	}
	else{
		alert("FALSE")
	}
    
}
