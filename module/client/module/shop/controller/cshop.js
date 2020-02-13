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
function shop_list_all(){
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=all',
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            for (var i = 0; i < data.length; i++) {
                $('#list').append(
                    '<div class="itemlist">'+
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
            for (var i = 0; i < data.length; i++) {
                $('#list').append(
                    '<div class="item">'+
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

        },
        error: function(){
            console.log("error");
        }
    });
}
$(document).ready(function() {
    menu();
    shop_list_all();
    shop_list_brands();
});