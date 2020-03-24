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
        console.log(data);
        if(data=="fail"){// si no hay usuario o los datos hay errores envia al login
            location.href = "index.php?page=login";
        }else{// si todo va bien pinta en profile.
            $('#profile_avatar').attr('src',data.avatar);
            $('#profile_name').html(data.first_name+" "+data.last_name);
            $('#profile_username').html("<b>Username: </b> "+data.username);
            $('#profile_email').html("<b>Email: </b> "+data.email);
        }
    })
}

$(document).ready(function() {
    profile();
    console.log("dentro de perfil");
})