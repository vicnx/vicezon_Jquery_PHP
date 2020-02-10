$(document).ready(function() {
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=all',
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            for (var i = 0; i < 10; i++) {
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
});