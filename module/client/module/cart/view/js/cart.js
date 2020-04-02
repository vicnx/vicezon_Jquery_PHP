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

function add_qty(idproduct){
    // console.log("id save_qty: "+idproduct)
    cart=JSON.parse(localStorage.cart);//pasamos el local storage a json
    for (var i in cart){//hacemos un bucle para buscar ese id
        //si el producto existe en local storage, suma 1 a la cantidad y sale de toda la funcion.
        if(cart[i].id==idproduct){//si el id es el proporcionado añadimos 1
            // console.log("dentro if save")
            cart[i].qty=cart[i].qty+1;
            localStorage.cart = JSON.stringify(cart);//guardamos el nuevo carrito
        }
    }
}

function rest_qty(idproduct){
    // console.log("id save_qty: "+idproduct)
    cart=JSON.parse(localStorage.cart);//pasamos el local storage a json
    for (var i in cart){//hacemos un bucle para buscar ese id
        //si el producto existe en local storage, suma 1 a la cantidad y sale de toda la funcion.
        if(cart[i].id==idproduct){//si el id es el proporcionado añadimos 1
            // console.log("dentro if save")
            if(cart[i].qty===1){
                console.log("CANTIDAD ES 1 AQUI SE BORRA "+cart[i].qty);
                delete_product(idproduct);
            }else{
                console.log("cantidad es mayor que uno "+cart[i].qty)
                cart[i].qty=cart[i].qty-1;
                localStorage.cart = JSON.stringify(cart);//guardamos el nuevo carrito
            }
        }
    }
}

function delete_product(idproduct){
    //esta funcion borra todo el producto entero del carrito
    jsoncart=JSON.parse(localStorage.cart); //pasamos el carrito a json
    // console.log(jsoncart.find(x =>x.id===idproduct));
    index=jsoncart.indexOf(jsoncart.find(x =>x.id===idproduct));//cojemos el index con un find
    // console.log("indice: "+index);
    jsoncart.splice(index,1);//eliminamos ese index
    localStorage.cart = JSON.stringify(jsoncart);//guardamos el nuevo carrito

}
$(document).ready(function() {
    if(localStorage.cart){
        cart=JSON.parse(localStorage.cart);
    }else{
        cart= [];
    }
});