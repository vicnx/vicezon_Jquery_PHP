function send_likes(){
    $.ajax({ 
        type: 'GET', 
        url: 'module/client/module/shop/controller/controller_shop.php?op=check_likes', 
        dataType: 'json',
    })
    .done(function( data) {
        data.forEach(element => {
            // $(".itemlist").is('#'+element.idproduct).find("#like").addClass("liked");
            id=$("#"+element.idproduct+'.itemlist').find("#like").addClass("liked");
            id_id=$("#"+element.idproduct+'.itemlist').attr("id");
            console.log(id_id);
        });

    })
    .fail(function(textStatus) {
          console.log("Error");
    });
}
function favs_control(element){
    const boton= element;
    var likes = function(url) {
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
    var idproduct= element.closest('.itemlist').attr("id");
    likes('module/client/module/shop/controller/controller_shop.php?op=check_like_click&idproduct='+idproduct)
    .then(function(data){
        console.log(data);
        if(data==="true"){
            likes('module/client/module/shop/controller/controller_shop.php?op=delete_like&idproduct='+idproduct)
            .then(function(data){
                if(data=="deleted"){
                    boton.find("#like").removeClass("liked");
                }else{
                    console.log(data);
                }
            })
        }else{
            likes('module/client/module/shop/controller/controller_shop.php?op=do_like&idproduct='+idproduct)
            .then(function(){
                boton.find("#like").addClass("liked");
            })
        }
    })
}