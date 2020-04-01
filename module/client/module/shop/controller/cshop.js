function ajaxForSearch(durl) {
    //realizado con promesas
    var get_products = function(url) {
        return new Promise(function(resolve, reject) {
         $.ajax({ 
                  type: 'GET', 
                  url: url, 
                  dataType: 'json',
              })
              .done(function( data) {
                  resolve(data);
              })
              .fail(function(textStatus) {
                    console.log("Error en la promesa" + textStatus);
              });
        });
      }
    var url=durl;
    console.log("URL = "+url)
    get_products(url)
      .then(function(total_productos){
        var total_pages=Math.ceil(total_productos.length/5);
        console.log(total_pages)
        var url2=(url+'&page='+(0));
        console.log("url2:  "+ url2)
        get_products(url2)
            .then(function(result){
                console.log(result)
                $('#list').empty();
                if(result == 0){
                    $('#list').append('<div class="itemlistempty">NO PRODUCTS</div>');
                    $('.pagination').hide();
                }else{
                    result.forEach(element =>
                        $('#list').append( 
                            '<div class="itemlist" id="'+element.idproduct+'">'+
                                '<div class="card">'+
                                    '<img class="card-img-top" src="'+element.imagen+'" alt="picture"">'+
                                    '<div class="card-body">'+
                                        '<h5 class="card-title">'+element.nombre+'</h5>'+
                                        '<p class="card-text">'+element.price+' €</p>'+
                                        '<p class="card-text">MARCA: '+element.marca+'</p>'+
                                        '<p class="card-text">id: '+element.idproduct+'</p>'+
                                        '<i id="shopping_cart_top_tablets" class="fas fa-shopping-cart"></i>'+
                                        '<i id="like" class="fas fa-heart"></i>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                        )                      
                    );
                }
                // getdetails();
            })
            .then(function(likes){
                send_likes();
            })
            $(".pagination").bootpag({
                total: total_pages,
                page: 1,
                maxVisible: 5,
                next: 'next',
                prev: 'prev'
            }).on("page", function (e, num) {
                var url3=(url+'&page='+(num-1));
                get_products(url3)
                    .then(function(result){
                        console.log(url3)
                        $('#list').empty();
                        result.forEach(element =>
                            $('#list').append( 
                                '<div class="itemlist" id="'+element.idproduct+'">'+
                                    '<div class="card">'+
                                        '<img class="card-img-top" src="'+element.imagen+'" alt="picture"">'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+element.nombre+'</h5>'+
                                            '<p class="card-text">'+element.price+' €</p>'+
                                            '<p class="card-text">MARCA: '+element.marca+'</p>'+
                                            '<p class="card-text">id: '+element.idproduct+'</p>'+
                                            '<i id="shopping_cart_top_tablets" class="fas fa-shopping-cart"></i>'+
                                            '<i id="like" class="fas fa-heart"></i>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'
                            )                      
                        );
                        send_likes();
                    })
            });    
      })
}
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

function details_shop(){
    //se carga el producto desde localStorage.
    var idproduct=localStorage.getItem("product");
    $('#filters').hide();
    $('.pagination').hide();
    $("#list").html("");
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=details&idproduct='+idproduct,
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
            $('#list').append(
                '<div class="details">'+
                    '<a id="btnvolver" class="btn btn-danger" href="#">Volver</a>'+
                    '<img class="details_img" src="'+data[0].imagen+'" alt="picture"">'+
                    '<div class="infoproduct" id="' +data[0].idproduct+'">'+
                        '<span>ID:' +data[0].idproduct+'</span>'+
                        '<span>NAME:'+data[0].nombre+ '</span>'+
                        '<span>Price:'+data[0].price+' </span>'+
                        '<i id="like" class="fas fa-heart"></i>'+
                    '</div>'+
                '</div>'
            )
        },
        error: function(){
            console.log("error");
        }
    });
    click_like_details();
    check_likes_details(idproduct);
    //este boton lo que hace es borrar el localstorage y actualziar la pagina
    $('#btnvolver').on('click',function() {
        localStorage.removeItem("product");
        window.location.href = "index.php?page=shop";
    });
}
function filters(){
    //aqui introducimos las marcas de base de datos dinamicamente al div
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
    //elimina todas las marcas de localstorage para despues añadirlas
    localStorage.removeItem("brand");
    var checked="";
    var contador1=0;
    var sentencia="";
    checked="";
    contador1=0;
    $(".checkbox_filter:checkbox[name=brands]:checked").each(function() {
        checked=checked+$(this).attr("id")+",";
        //Añade todas las marcas checkeadas a local storage
        localStorage.setItem("brand", checked);
    }); 
}
function getdetails(){
    console.log("carga");
    $('#list').on('click','.itemlist',function(event){
        var idproductthis=$(this).closest('.itemlist').attr("id");
        if($(event.target).is('.fa-heart')){
            favs_control($(this),$(this).closest('.itemlist').attr("id"));
        }else if($(event.target).is('.fa-shopping-cart')){
            console.log(idproductthis,$(this));
            // save_product_on_cart("2");
            save_product_on_cart(idproductthis);
        }else{
            var idproduct= $(this).attr("id");
            localStorage.setItem("product", idproduct);
            details_shop();
        }
    })
}
function click_like_details(){
    $('.infoproduct').on('click','#like',function(event){
        var idproduct=($(this).parent().attr('id'));
        favs_control($(this).closest('.infoproduct'),idproduct);
    })
}

function check_checkbox_default_checked(){
    // esto es una especie de segundo controlador para que funcione correctamente
        console.log("product is null")
        if(localStorage.getItem("brand")=== null){
            checkbox_filter();
        }else{
            //guardamos la string de local storage en una variable
            var brands = localStorage.getItem("brand");
            if(localStorage.getItem("brand").length>1){
                //le borramos el ultimo caracter si el tamaño de brands es mas de uno (ya que se separan por comas)
                brands=brands.slice(0, -1);
            }
            //le borramos las comas convirtiendola en un array
            brands=brands.split(",");
            //por cada posicion del array checkeamos en filter ese elemento
            brands.forEach(element => document.getElementById(element).checked = true);
            checkbox_filter();
        }
}

function check_checkbox_click(){
    //Onclick elemento del filters, carpa el checkboxfilters
    //lo cargo en una funciona aparte ya que si no sobrecargaba la pagina
    $('.checkbox_filter').on('click',function(){
        checkbox_filter();
        order_by_price();
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
function order_by_price(){
    //esto selecciona el valor del Select actual
    var order=$("#order_price :selected").val();
    var brands = localStorage.getItem("brand");
    var sentencia;
    //El primer if es por si el sort esta desactivado que los ordene por nombre ( es un pequeño controlador)
    if(order == "disable"){
        if (brands != null){
            brands=brands.slice(0, -1);
            sentencia = ("Where marca IN("+brands+") order by nombre ASC ");
            console.log(sentencia);
        }else{
            sentencia = ("order by nombre ASC");
        }
    }else{
        console.log("brands====="+brands);
        if (brands != null){
            brands=brands.slice(0, -1);
            sentencia = ("Where marca IN("+brands+") order by price "+order);
            console.log(sentencia);
        }else{
            sentencia = ("order by price "+order);
        }
    }
    console.log(order);
    $("#list").html("");
    ajaxForSearch('module/client/module/shop/controller/controller_shop.php?op=order_by_price&sentencia='+sentencia); 
}
function order_by_price_change(){
    //cuando el select de price cambia vuelve a llamar a la funcion
    $("#order_price").on("change",function(){
        order_by_price();
    });
}

function controlador(){
    var brand_selected= sessionStorage.getItem('brand_selected');
    var busqueda= sessionStorage.getItem('busqueda');
    var ok =true;
    if(busqueda === null){
        busqueda="";
        ok=false;
    }
    if(brand_selected==="0"){
        brand_selected=null;
        ok=false;
    }
    if(brand_selected != null && busqueda.length>0){
        var sentencia = "Where nombre LIKE '%"+busqueda+"%' AND marca="+brand_selected;
        console.log("nada null");
        ok=true;
    }else if(brand_selected === null && (busqueda.length>0)){
        console.log("brand null busque NO");
        var sentencia = "Where nombre LIKE '%"+busqueda+"%'";
        ok=true;
    }else if(brand_selected != null && busqueda.length===0){
        console.log("brand NO busqueda NULL");
        var sentencia = "Where marca="+brand_selected;
        ok=true;
    }else{
        if (localStorage.getItem("product")===null){
            //si el product es null en local storage cargamos lo siguiente
            check_checkbox_default_checked();
            check_checkbox_click();
            // esto carga el order by price y su change
            order_by_price();
            order_by_price_change();
            }else{
                //si no es null cargamos ese producto
                details_shop();
            }
    }
    if(ok===true){
        ajaxForSearch('module/client/module/shop/controller/controller_shop.php?op=busqueda&sentencia='+sentencia);
        sessionStorage.removeItem('brand_selected');
        sessionStorage.removeItem('busqueda');
    }else{
        console.log("")
    }
}

$(document).ready(function() {
    filters();
    controlador();
    menu();
    getdetails();


});