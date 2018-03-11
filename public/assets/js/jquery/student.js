$(document).ready(function() {


    $("#submit").click(function() {
        var content = $("#content").val();
        var type = $("#type").val();
        var id = Math.floor(Math.random() * 1000);
        $.ajax({
            url : "/api/submit",
            method: "POST",
            data : { 
                "applicationId" :  id,
                "content" : content,
                "studId" : '100',
                "to" : '105',
                "type" : type
            },
            success : function(data) {
                console.log(data);
                alert("Application Added");
                location.href = "/pending";
            }
        });
    });

});