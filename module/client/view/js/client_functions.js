function menu_clicks(){
    //boton logout va al controlador del login
    $("#logout").on("click",function(){
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
    })
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

function client_check(){
    $.ajax({ 
        type: 'GET', 
        url: 'module/login/controller/clogin.php?op=check_login',
        success: function (data) { 
            $("#username").html(data);
            $("#type").html(data);
        },
        error: function(){
            console.log("error");
        }
    });
}

$(document).ready(function() {
    client_check();
    adminpanel();
    menu_clicks();
});