function carousel(){
    $.ajax({ 
        type: 'GET', 
        url: '/vicezon/module/client/module/home/controller/controller_home.php?op=toptablets',
        async:false, 
        dataType: 'json',
        data:{},//idproduct es lo que guardamos para coger en el get LUEGO EL GET TIENE QUE SER ASI ($_GET['idproduct']); y el id ES EL ATRIBUTO
        success: function (data) { 
            for (var i = 0; i < 10; i++) {
                $('#top-tablets').append(
                    '<div class="item" id='+data[i].idproduct+'>'+
                        '<div class="card">'+
                            '<img class="card-img-top" src="'+data[i].imagen+'" alt="picture"">'+
                            '<div class="card-body">'+
                                '<h5 class="card-title">'+data[i].nombre+'</h5>'+
                                '<p class="card-text">'+data[i].price+' €</p>'+
                                '<i id="shopping_cart_top_tablets" class="fas fa-shopping-cart"></i>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                    // '<div class="item">'+
                    //     '<img src="'+data[i].imagen+'" alt="Smiley face"">'+
                    //     '<div class="footer_top_tablets">'+
                    //         '<span id="rating_top_tablets"><i class="fas fa-star"></i> '+data[i].rating+'</span>'+
                    //         '<span id="number_top_tablets">'+(i+1)+'</span>'+
                    //         '<span id="name_top_tablets">'+data[i].nombre+'</span>'+
                    //     '</div>'+
                    // '</div>'
                )
             }
        },
        error: function(){
            console.log("error");
        }
    });
    $('.owl-carousel').owlCarousel({
        stagePadding:40,
        loop:false,
        margin:50,
        nav:false,
        responsive:{
            400:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })
    $('.item').on('click',function() {
        var idproduct= $(this).attr("id");
        console.log("product id= "+idproduct);
        localStorage.setItem("product", idproduct);
        window.location.href = "index.php?page=shop";
    });
}
function topbrands(){
    $.ajax({ 
        type: 'GET', 
        url: '/vicezon/module/client/module/home/controller/controller_home.php?op=brands_card',
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
                for (var i = 0; i < 6; i++) {
                    $('#brands-cards-homepage').append(
                        '<div class="brand-card" id='+data[i].idbrand+'>'+'<span>'+data[i].namebrand+'</span></div>'
                    )
                 }

        },
        error: function(){
            console.log("error");
        }
    });
    $('.brand-card').on('click',function() {
        var idbrand= $(this).attr("id");
        console.log(idbrand);
        localStorage.setItem("brand", idbrand);
        window.location.href = "index.php?page=shop";
    });
}
function menu(){
    $(function() {
        var menu = $("#menunav");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 200) {
                menu.removeClass('transparent').addClass("bg-dark");
            } else {
                menu.removeClass("bg-dark").addClass('transparent');
            }
        });
    });
}
var clicks = 1;
function get_products_views(offset = 0){
    console.log(offset);
    $.ajax({ 
        type: 'GET', 
        url: '/vicezon/module/client/module/home/controller/controller_home.php?op=view_top&offset='+offset,
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $('#products_more_visited').append(
                    '<div class="item" id='+data[i].idproduct+'>'+
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
function loadmoreview(){
    $('.loadmorebutton').on('click', function(){
        off = clicks * 4
        get_products_views(off)
        clicks++;
    })
}
$(document).ready(function() {
    menu();
    carousel();
    topbrands();
    get_products_views();
    loadmoreview();
})