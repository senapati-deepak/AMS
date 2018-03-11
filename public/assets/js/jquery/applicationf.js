$(document).ready(function() {


    $("#accept").click(function() {
        var comment = $("#comment").val();
        $.ajax({
            url : "/api/accept",
            method: "POST",
            data : { 
                id : "1000",
                msg : comment
            },
            success : function(data) {
                console.log(data);
                location.href = "/faculty"
            }
        });
    });

});