$(document).ready(function() {
    $("#login").on("click",function(){
        $.ajax({ 
            type: 'GET', 
            url: '/vicezon/module/admin/module/tablets/controller/controller_tablets.php?op=changerank',
            async:false, 
            dataType: 'json',
            data:{},//idproduct es lo que guardamos para coger en el get LUEGO EL GET TIENE QUE SER ASI ($_GET['idproduct']); y el id ES EL ATRIBUTO
            success: function (data) { 
                console.log("dentro");
                location.href = "index.php";
            },
            error: function(){
                console.log("error");
            }
        });
    });
});