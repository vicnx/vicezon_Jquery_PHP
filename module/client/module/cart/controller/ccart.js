function load_cart_local(){
    //Si en local storage no hay nada, el carrito aparecerá vacio.
    if (!localStorage.cart) {
        $("#cart_table").html('<span id="cart_empty">The cart is empty</span>');
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
    console.log(cart);
    console.log(cart.find(x =>x.id==='3').qty);
    for (var i in cart){
        var producto=cart[i];
        if(!productos){
            var productos=producto.id;
        }else{
            var productos=producto.id+','+productos;
        }
    }
        console.log(productos);
        cart_local_product_url='module/client/module/cart/controller/ccart.php?op=get_products_cart_local&idproducts='+productos;
        cart_promise(cart_local_product_url)
        .then(function(productos){
            console.log(productos);
            var number=0;
            productos.forEach(p => {
                $('#cart_table > tbody').append(
                    '<tr>'+
                    '<th scope="row">'+number+'</th>'+
                    '<td>'+p.idproduct+'</td>'+
                    '<td>'+p.price+'</td>'+
                    //lo siguiente sirve para obtener la cantidad del producto que esta actualmente en el bucle (buscando por su id en local storage)
                    '<td>'+cart.find(x =>x.id===p.idproduct).qty+'</td>'+
                    '<td>total</td>'+
                    '<td>manage</td>'+
                '</tr>'
                )
                number=number+1;
            });

        })
}

$(document).ready(function() {
    load_cart_local();
});