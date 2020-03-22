$(document).ready(function() {
    $("#login").on("click",function(){
        $.ajax({ 
            type: 'GET', 
            url: 'module/login/controller/clogin.php?op=logout',
            success: function (data) { 
                console.log(data);
                location.href = "index.php";
            },
            error: function(){
                console.log("error");
            }
        });
    });
});