$(document).ready(function() {
    $("#login").on("click",function(){
        $.ajax({ 
            type: 'GET', 
            url: '/vicezon/module/client/module/home/controller/controller_home.php?op=changerank',
            async:false, 
            dataType: 'json',
            data:{},//idproduct es lo que guardamos para coger en el get LUEGO EL GET TIENE QUE SER ASI ($_GET['idproduct']); y el id ES EL ATRIBUTO
            success: function (data) { 
                location.href = "index.php";
            },
            error: function(){
                console.log("error");
            }
        });
    });
});