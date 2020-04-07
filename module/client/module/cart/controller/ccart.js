function load_cart_local(){
    //Si en local storage no hay nada, el carrito aparecerá vacio.
    if (!localStorage.cart || localStorage.cart === '[]') {
        $(".carrito").html('<span id="cart_empty">The cart is empty</span>');
        localStorage.removeItem('cart');//borramos por si acaso
      return;
    }
    //esto solo lo hace si hay algo en el carrito
    var cart_promise = function(url) {
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
    cart=JSON.parse(localStorage.cart);
    // console.log(cart);
    // console.log(cart.find(x =>x.id==='3').qty);
    for (var i in cart){
        var producto=cart[i];
        if(!productos){
            var productos=producto.id;
        }else{
            var productos=producto.id+','+productos;
        }
    }
        cart_local_product_url='module/client/module/cart/controller/ccart.php?op=get_products_cart_local&idproducts='+productos;
        cart_promise(cart_local_product_url)
        .then(function(productos){
            $("#cart_table > tbody").html(''); // se limpia la tabla para que se actualize al sumar o restar
            var number=0;
            total=0;
            console.log(productos)
            productos.forEach(p => {
                qtyproduct=cart.find(x =>x.id===p.idproduct).qty;
                totalproducto=(parseInt(p.price)*parseInt(qtyproduct));
                total=total+totalproducto;
                $('#cart_table > tbody').append(
                '<tr>'+
                    '<th scope="row">'+number+'</th>'+
                    '<td><img class="cimagen" src="'+p.imagen+'">IDPRODUCT: '+p.idproduct+'</td>'+
                    '<td>'+p.nombre+'</td>'+
                    '<td>'+p.price+'</td>'+
                    //lo siguiente sirve para obtener la cantidad del producto que esta actualmente en el bucle (buscando por su id en local storage)
                    '<td>'+
                    '<i id="'+p.idproduct+'" class="fas fa-minus-square fa-lg"></i>'+
                    '<span class="qty-text">'+qtyproduct+'</span>'+
                    '<i id="'+p.idproduct+'" class="fas fa-plus-square fa-lg" > </i>'+
                    '</td>'+
                    '<td>'+totalproducto+'</td>'+
                    '<td><i id="'+p.idproduct+'" class="fas fa-trash-alt fa-lg"></i></td>'+
                '</tr>'
                )
                number=number+1;
            });
            $('.price_total_cart').html(
                'TOTAL = '+total
            )
            load_clicks();//cargamos los clicks al cargar todos los productos
        })
}

function load_clicks(){
    //click delete producto
    $('.fa-trash-alt').on('click',function(event){
        id=$(this).attr("id");
        delete_product(id);//pasamos la id de ese boton (que es la del producto)
        load_cart_local();//recarmamos el carrito
    })
    //add qty click
    $('.fa-plus-square').on('click',function(event){
        id=$(this).attr("id");
        console.log(id);
        add_qty(id);//le pasamos id al save_qty
        setTimeout(function(){ //hacemos un set time para que primero haga la promesa y seguidamente vuelva a cargar el carrito
            load_cart_local();//recargamos el carrito sin necesidad de actualziar la pagina
        }, 150);
        
    })
    //rest qyty click
    $('.fa-minus-square').on('click',function(event){
        console.log("rest");
        id=$(this).attr("id");
        rest_qty(id);
        setTimeout(function(){ //hacemos un set time para que primero haga la promesa y seguidamente vuelva a cargar el carrito
            load_cart_local();//recargamos el carrito sin necesidad de actualziar la pagina
        }, 150);
    })
    //click checkout
    $('#checkout').on('click',function(event){
        console.log("compra");
        checkout();//cargamos la funcion checkout
    })
}

function checkout(){
    var checkout_promise = function(url) {
        return new Promise(function(resolve, reject) {
            $.ajax({ 
                  type: 'GET', 
                  url: url,
              })
              .done(function( data) {
                  resolve(data);
              })
              .fail(function(textStatus) {
                    console.log("Error en la promesa" + textStatus);
              });
            });
        }
    checkout_promise('module/client/module/cart/controller/ccart.php?op=checkout')
    .then(function(login){
        console.log(login);
        if(login == "no-login"){ // si el user no esta login
            location.href = "index.php?page=login";
        }else{ //si ya esta login
            $(".carrito").html('<span id="cart_empty">Compra realizado con exito</span>');
            setTimeout(' window.location.href = "index.php";',1000);
            localStorage.removeItem('cart');//borramos el carrito

        }
    })
}

$(document).ready(function() {
    load_cart_local();
});