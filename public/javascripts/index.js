$(document).ready(function(){
    console.log("Hello");
    $("#loginform").submit(function(e){
        e.preventDefault();
        var username = $("#logname").val();
        var password = $("#logpass").val();
        console.log(password);
        if(username === "rkpattnaik780" && password === "student"){
            location.href = "./student";}
        else if(username === "tkchoudhary")
        {
            location.href = "./faculty"
        }
    });
    $("#regform").submit(function(e){
        e.preventDefault();
    });
});