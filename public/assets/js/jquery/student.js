$(document).ready(function() {


    $("#submit").click(function() {
        var content = $("#content").val();
        $.ajax({
            url : "/api/submit",
            method: "POST",
            data : { 
                "applicationId" :  '1000',
                "content" : content,
                "studId" : '100',
                "to" : '200'
            },
            success : function(data) {
                console.log(data);
                location.href = "/faculty"
            }
        });
    });

});