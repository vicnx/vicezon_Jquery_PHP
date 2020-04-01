function save_product_on_cart(idproduct){
    for (var i in cart){
        //si el producto existe en local storage, suma 1 a la cantidad y sale de toda la funcion.
        if(cart[i].id==idproduct){
            cart[i].qty=cart[i].qty+1;
            save_cart_local();
            return
        }
    }
    //esto solo lo hace la primera vez que se añade al carrito ese producto.
    console.log("test1")
    var producto = {id: idproduct,qty: 1};
    cart.push(producto);
    console.log("CART: "+JSON.stringify(cart));
    save_cart_local();
}
function save_cart_local(){
    localStorage.cart = JSON.stringify(cart);
}

$(document).ready(function() {
    if(localStorage.cart){
        cart=JSON.parse(localStorage.cart);
    }else{
        cart= [];
    }
});