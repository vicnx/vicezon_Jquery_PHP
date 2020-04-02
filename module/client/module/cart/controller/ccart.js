function load_cart_local(){
    //Si en local storage no hay nada, el carrito aparecerá vacio.
    if (!localStorage.cart || localStorage.cart === '[]') {
        $("#cart_table").html('<span id="cart_empty">The cart is empty</span>');
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
            productos.forEach(p => {
                $('#cart_table > tbody').append(
                    '<tr>'+
                    '<th scope="row">'+number+'</th>'+
                    '<td>'+p.idproduct+'</td>'+
                    '<td>'+p.price+'</td>'+
                    //lo siguiente sirve para obtener la cantidad del producto que esta actualmente en el bucle (buscando por su id en local storage)
                    '<td>'+
                    '<i id="'+p.idproduct+'" class="fas fa-minus-square fa-lg"></i>'+
                    '<span class="qty-text">'+cart.find(x =>x.id===p.idproduct).qty+'</span>'+
                    '<i id="'+p.idproduct+'" class="fas fa-plus-square fa-lg" > </i>'+
                    '</td>'+
                    '<td>total</td>'+
                    '<td><i id="'+p.idproduct+'" class="fas fa-trash-alt fa-lg"></i></td>'+
                '</tr>'
                )
                number=number+1;
            });
            load_clicks();//cargamos los clicks al cargar todos los productos
        })
}

function add_qty_click(){
    $('.fa-plus-square').on('click',function(event){
        id=$(this).attr("id");
        console.log(id);
        add_qty(id);//le pasamos id al save_qty
        load_cart_local();//recargamos el carrito sin necesidad de actualziar la pagina
    })
}

function rest_qty_click(){
    console.log("rest load")
    $('.fa-minus-square').on('click',function(event){
        console.log("rest");
        id=$(this).attr("id");
        rest_qty(id);
        load_cart_local();
    })
}
function delete_product_click(){
    $('.fa-trash-alt').on('click',function(event){
        id=$(this).attr("id");
        delete_product(id);//pasamos la id de ese boton (que es la del producto)
        load_cart_local();//recarmamos el carrito
    })
}


function load_clicks(){
    delete_product_click();
    add_qty_click();
    rest_qty_click();
}
$(document).ready(function() {
    load_cart_local();
});