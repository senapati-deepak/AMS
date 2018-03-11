$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id')
    console.log(id);
    $("#accept").click(function() {
        var comment = $("#comment").val();
        $.ajax({
            url : "/api/accept",
            method: "POST",
            data : { 
                id : id ,
                msg : comment
            },
            success : function(data) {
                console.log(data);
                location.href = "/faculty_history"
            }
        });
    });

    $("#reject").click(function() {
        var comment = $("#comment").val();
        $.ajax({
            url : "/api/reject",
            method: "POST",
            data : { 
                id : id ,
                msg : comment
            },
            success : function(data) {
                console.log(data);
                location.href = "/faculty_history"
            }
        });
    });

});