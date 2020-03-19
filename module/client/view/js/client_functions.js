function menu_clicks(){
    $("#login").on("click",function(){
        location.href = "index.php?page=login";
    })
    $("#register").on("click",function(){
        location.href = "index.php?page=register";
    })
    // FUNCTIONES MENU
    $('#contact').on("click",function(){
        location.href = "index.php?page=contact";
    })
    $('#home').on("click",function(){
        location.href = "index.php";
        localStorage.removeItem("brand");
        localStorage.removeItem("producto");
    })
    $('#products').on("click",function(){
        localStorage.removeItem("brand");
        localStorage.removeItem("producto");
        location.href = "index.php?page=shop";
    })
}
function adminpanel(){
    $("#admin_panel").on("click",function(){
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
}

// SELECT ADMIN OR CLIENT
$(document).ready(function() {
    adminpanel();
    menu_clicks();
});