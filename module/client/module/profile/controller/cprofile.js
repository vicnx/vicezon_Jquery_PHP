var compras = function(url){
    return new Promise(function(resolve, reject) {
        $.ajax({ 
                 type: 'POST', 
                 url: url,
                 dataType: 'json', 
             })
             .done(function( data) {
                 resolve(data);
             })
             .fail(function(textStatus) {
                   console.log("Error en la promesa");
        });
    });
}
var ver_mas = function(url,idfac){
    return new Promise(function(resolve, reject) {
        $.ajax({ 
                 type: 'POST', 
                 url: url,
                 data:{idfac: idfac},
                 dataType: 'json', 
             })
             .done(function( data) {
                 resolve(data);
             })
             .fail(function(textStatus) {
                   console.log("Error en la promesa");
        });
    });
}

function profile(){
    var datos = function(url){
        return new Promise(function(resolve, reject) {
            $.ajax({ 
                     type: 'GET', 
                     url: url,
                     dataType: 'json'
                 })
                 .done(function( data) {
                     resolve(data);
                 })
                 .fail(function(textStatus) {
                       console.log("Error en la promesa");
            });
        });
    }
    var datos_coger = 'module/client/module/profile/controller/cprofile.php?&op=datos_coger';
    datos(datos_coger)//despues de coger los datos realiza lod e abajo
    .then(function(data){
        if(data=="fail"){// si no hay usuario o los datos hay errores envia al login
            location.href = "index.php?page=login";
        }else{// si todo va bien pinta en profile.
            $('#profile_avatar').attr('src',data.avatar);
            $('#profile_name').html(data.first_name+" "+data.last_name);
            $('#profile_username').html("<b>Username: </b> "+data.username);
            $('#profile_email').html("<b>Email: </b> "+data.email);
            $('#profile_saldo').html("<b>Saldo: </b> "+data.saldo);
            compras('module/client/module/profile/controller/cprofile.php?&op=facturas')
            .then(function(data){
                console.log(data);
                data.forEach(factura => {
                    $('.compras').append(
                    "<tr>"+
                        '<th>'+factura.idfactura+'</th>'+
                        '<td>'+factura.total_factura+'</td>'+
                        '<td>'+factura.fecha+'</td>'+
                        '<td>'+
                            '<i id="'+factura.idfactura+'" class="fas fa-eye fa-lg modal-toogle ver-mas"> </i>'+
                        '</td>'+
                    '</tr>'
                    );
                });
                clicks();
            })
        }
        
    })
}
function clicks(){
    $('.ver-mas').on('click', function(e) {
        idfact=$(this).attr("id");
        $('.modal-heading').html("Factura "+idfact);
        console.log(idfact);
        ver_mas('module/client/module/profile/controller/cprofile.php?&op=more_facturas',idfact)
        .then(function(lines){
            console.log(lines);
            $('.line_table').html("");
            lines.forEach(product =>{
                var nombre_producto="NOMBRE POR DEFECTO";
                var img_product="https://www.brdtex.com/wp-content/uploads/2019/09/no-image.png" //imagen que no tiene imagen dispoible
                $.ajax({ //este ajax lo que hace es coger la info de cada producto.
                    type: 'POST', 
                    url: 'module/client/module/profile/controller/cprofile.php?&op=product_data',
                    data:{idproduct: product.idproduct},
                    dataType: 'json', 
                })
                .done(function( product_info) {
                    console.log(product_info[0]);//guarda la informacion en variables para despues pintarla
                    nombre_producto=product_info[0].nombre;
                    img_product=product_info[0].imagen;
                    console.log(nombre_producto);
                    $('.line_table').append(
                        "<tr>"+
                            '<th>'+product.idlinea+'</th>'+
                            '<td><img class="cimagen" src="'+img_product+'">IDPRODUCT: '+product.idproduct+'</td>'+
                            '<td>'+nombre_producto+'</td>'+
                            '<td>'+product.qty+'</td>'+
                            '<td>'+product.cost+'</td>'+
                        '</tr>'
                    );
                })
                .fail(function(textStatus) {
                      console.log("Error en la promesa");
                });
            })
        })
        e.preventDefault();
        $('#modal_factura').toggleClass('is-visible');
      });
      $('.exit_modal').on('click', function(e) {
        e.preventDefault();
        $('#modal_factura').toggleClass('is-visible');
      });
}

$(document).ready(function() {
    profile();
    console.log("dentro de perfil");
})