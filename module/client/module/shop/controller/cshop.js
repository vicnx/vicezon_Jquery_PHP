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
    console.log("shop list all");
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=all',
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            console.log("dentro shop list all");
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
                                    '<p class="card-text">MARCA: '+data[i].marca+'</p>'+
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
                                    '<p class="card-text">MARCA: '+data[i].marca+'</p>'+
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
    // localStorage.removeItem("product");
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
                '<a id="btnvolver" class="btn btn-danger" href="#">Volver</a>'+
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
    $('#btnvolver').on('click',function() {
        localStorage.removeItem("product");
        window.location.href = "index.php?page=shop";
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
                    '<input class="custom-control-input checkbox_filter" type="checkbox" value="" name="brands" id='+data[i].idbrand+'>'+
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
function checkbox_filter(){
    localStorage.removeItem("brand");
    var checked="";
    var contador1=0;
    var sentencia="";
    checked="";
    contador1=0;
    $(".checkbox_filter:checkbox[name=brands]:checked").each(function() {
        checked=checked+$(this).attr("id")+",";
        localStorage.setItem("brand", checked);
    });
    checked = checked.slice(0, -1);
    sentencia="Where marca IN("+checked+")";
    console.log(sentencia);
    if(sentencia.length<17){
        $("#list").html("");
        shop_list_all();
    }else{
    $("#list").html("");    
        $.ajax({ 
            type: 'GET', 
            url: 'module/client/module/shop/controller/controller_shop.php?op=getinfobd&checks='+sentencia,
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
                                        '<p class="card-text">MARCA: '+data[i].marca+'</p>'+
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
    getdetails();  
}
//FILTROS CHECK CON ARRAY(Si quitas el check borra el ultimo check que has hecho (no funciona bien))
// function checkbox_brands_checked(){
//     var checks=[];
//     var count = 0;
//     $('input').on('click',function(){  
//         var idbrand= $(this).attr("id");
//         console.log(idbrand);
//         if($(this).is(':checked')){
//             if (count==0){
//                 checks.push("Where marca = "+idbrand);
//                 count=count+1;
//             }else{
//                 count=count+1;
//                 checks.push(" OR marca = "+idbrand);
//             }
//         }else{
//             checks.pop();
//             count=count-1;
//         }
//         console.log("count"+count)
//         console.log(checks);
//         if (!count==0){
//             var arrayfinal = checks.toString();
//             arrayfinal=arrayfinal.replace(/,/g, "");
//             console.log(arrayfinal);
//             $("#list").html("");    
//             $.ajax({ 
//                 type: 'GET', 
//                 url: 'module/client/module/shop/controller/controller_shop.php?op=getinfobd&checks='+arrayfinal,
//                 async:false, 
//                 dataType: 'json',
//                 data:{},
//                 success: function (data) { 
//                     console.log(data);
//                     if (data.length == 0){
//                         $('#list').append('<div class="itemlistempty">NO PRODUCTS</div>')
//                     }else{
//                         for (var i = 0; i < data.length; i++) {
//                             $('#list').append(
//                                 '<div class="itemlist" id="'+data[i].idproduct+'">'+
//                                     '<div class="card">'+
//                                         '<img class="card-img-top" src="'+data[i].imagen+'" alt="picture"">'+
//                                         '<div class="card-body">'+
//                                             '<h5 class="card-title">'+data[i].nombre+'</h5>'+
//                                             '<p class="card-text">'+data[i].price+' €</p>'+
//                                             '<i id="shopping_cart_top_tablets" class="fas fa-shopping-cart"></i>'+
//                                         '</div>'+
//                                     '</div>'+
//                                 '</div>'
//                             )
//                          }
//                     }
//                 },
//                 error: function(){
//                     console.log("error");
//                 }
//             });
//         }else if($("input").is(':checked')<1){
//             shop_list_all();
//         }
//         getdetails();
//         // localStorage.setItem("filters", idbrand);
//         // checkbox_brands_checked();
//     })
//     // var brand = localStorage.getItem('filters');
//     // localStorage.removeItem('brand');
 
// }
function getdetails(){
    $(".itemlist").on('click',function(){
        var idproduct= $(this).attr("id");
        localStorage.setItem("product", idproduct);
        details_shop();
})
}

function check_checkbox_default_checked(){
    var idbrand = localStorage.getItem("brand");
        console.log("product is null")
        if(localStorage.getItem("brand")=== null){
            checkbox_filter();
        }else{
            var brands = localStorage.getItem("brand");
            brands=brands.slice(0, -1);
            brands=brands.split(",");
            brands.forEach(element => document.getElementById(element).checked = true);
            checkbox_filter();
        }
}

function check_checkbox_click(){
    $('.checkbox_filter').on('click',function(){
        checkbox_filter();
    });
}


$(document).ready(function() {
    if (localStorage.getItem("product")===null){
        filters();
        check_checkbox_default_checked();
        check_checkbox_click();
    }else{
        console.log("dentro else document ready");
        details_shop();
    }
    menu();
    getdetails();
});