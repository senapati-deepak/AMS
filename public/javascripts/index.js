$(document).ready(function(){
    console.log("Hello");
    $("#loginform").submit(function(e){
        e.preventDefault();
        var username = $("#logname").val();
        var password = $("#logpass").val();
        console.log(password);
        if(username === "studentsample" && password === "student"){
            location.href = "/student";
        }else{
            alert("Incorrect username or password!");
        }
    });
    $("#regform").submit(function(e){
        e.preventDefault();
    });
});