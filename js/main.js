$(document).ready(function(e) {
    let expanded = false;
	 $(".left-bar").toggle();
    $("#expand").click(function() {
        $(".left-bar").slideToggle();
        expanded = !expanded;
    });
});

function answer() {
    var x = document.getElementById("frm1");
    var y = document.getElementById("frm2");
    var z = document.getElementById("frm3");
    if(x.value=="2" && y.value=="1" && z.value=="2"){
        alert("TRUE")
    }
    else{
        alert("FALSE")
    }  
}
