function menu(){
    $(function menu() {
        var menu = $("#menunav");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 100) {
                menu.removeClass('transparent').addClass("bg-dark");
            } else {
                menu.removeClass("bg-dark").addClass('transparent');
            }
        });
    });
}
function shop_general(){
    if (localStorage.getItem("brand") === null) {
        if(localStorage.getItem("product") != null){
            console.log("product not null");
            details_shop();
        }else{
            console.log("brand null");
            shop_list_all();
        }
    }else if (localStorage.getItem("brand") != null){
        console.log("brand not null");
        shop_list_brands();
    }
}
function shop_list_all(){
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=all',
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            if(data.length == 0){
                $('#list').append('<div class="itemlistempty">NO PRODUCTS</div>')
            }else{
                for (var i = 0; i < data.length; i++) {
                    $('#list').append(
                        '<div class="itemlist"id="'+data[i].idproduct+'">'+
                            '<div class="card">'+
                                '<img class="card-img-top" src="'+data[i].imagen+'" alt="picture"">'+
                                '<div class="card-body">'+
                                    '<h5 class="card-title">'+data[i].nombre+'</h5>'+
                                    '<p class="card-text">'+data[i].price+' €</p>'+
                                    '<i id="shopping_cart_top_tablets" class="fas fa-shopping-cart"></i>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                    )
                 }
            }
        },
        error: function(){
            console.log("error");
        }
    });
}

function shop_list_brands(){
    var brand = localStorage.getItem('brand');
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=getinfobd&brand='+brand,
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            console.log(data);
            if (data.length == 0){
                $('#list').append('<div class="itemlistempty">NO PRODUCTS</div>')
            }else{
                for (var i = 0; i < data.length; i++) {
                    $('#list').append(
                        '<div class="itemlist" id="'+data[i].idproduct+'">'+
                            '<div class="card">'+
                                '<img class="card-img-top" src="'+data[i].imagen+'" alt="picture"">'+
                                '<div class="card-body">'+
                                    '<h5 class="card-title">'+data[i].nombre+'</h5>'+
                                    '<p class="card-text">'+data[i].price+' €</p>'+
                                    '<i id="shopping_cart_top_tablets" class="fas fa-shopping-cart"></i>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                    )
                 }
            }
        },
        error: function(){
            console.log("error");
        }
    });
}

function details_shop(){
    var idproduct=localStorage.getItem("product");
    localStorage.removeItem("product");
    console.log("idproducto local= "+idproduct);
    $("#list").html("");
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=details&idproduct='+idproduct,
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            $('#list').append(
                '<img class="details_img" src="'+data[0].imagen+'" alt="picture"">'+
                '<span>ID: </span>'+data[0].idproduct+
                '<span>NAME: </span>'+data[0].nombre+
                '<span>Price: </span>'+data[0].price
            )
        },
        error: function(){
            console.log("error");
        }
    });
}
function filters(){
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=filters_brand',
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $('#filters_brand').append(
                    '<label class="custom-control-label">'+
                    '<input class="custom-control-input" type="checkbox" value="" name="brands[]" id='+data[i].idbrand+'>'+
                    '<label class="custom-control-label brandtext">'+data[i].namebrand+'</label>'+
                    '</label>'
                )
             }
        },
        error: function(){
            console.log("error");
        }
    });
}
function checkbox_brands_checked(){
    var brand = localStorage.getItem('filters');
    $("#list").html("");
    localStorage.removeItem('brand');
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=getinfobd&brand='+brand,
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            console.log(data);
            if (data.length == 0){
                $('#list').append('<div class="itemlistempty">NO PRODUCTS</div>')
            }else{
                for (var i = 0; i < data.length; i++) {
                    $('#list').append(
                        '<div class="itemlist" id="'+data[i].idproduct+'">'+
                            '<div class="card">'+
                                '<img class="card-img-top" src="'+data[i].imagen+'" alt="picture"">'+
                                '<div class="card-body">'+
                                    '<h5 class="card-title">'+data[i].nombre+'</h5>'+
                                    '<p class="card-text">'+data[i].price+' €</p>'+
                                    '<i id="shopping_cart_top_tablets" class="fas fa-shopping-cart"></i>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                    )
                 }
            }
        },
        error: function(){
            console.log("error");
        }
    });
}


$(document).ready(function() {
    menu();
    shop_general();
    // details_shop();
    filters();
    // shop_list_all();
    // shop_list_brands();

    //ONCLICKS
    $('input').on('click',function(){
        var idbrand= $(this).attr("id");
        console.log(idbrand);
        localStorage.setItem("filters", idbrand);
        checkbox_brands_checked();
    })
    $(".itemlist").on('click',function(){
            var idproduct= $(this).attr("id");
            localStorage.setItem("product", idproduct);
            details_shop();
    })
});