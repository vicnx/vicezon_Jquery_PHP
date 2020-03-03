function insert_brands_drop(){
    $.ajax({ 
        type: 'GET', 
        url: '/vicezon/module/client/module/search/controller/csearch.php?op=readbrandsdb',
        dataType: 'json',
        success: function (data) { 
            $.each(data, function(i, item) {
                $("#drop_brands_search").append(
                    '<option value="'+item.idbrand+'">' +item.namebrand + '</option>'
                )
            });
        },
        error: function(){
            console.log("error");
        }
    });
}
function give_val_search(){
    var busqueda = $('#search_bar').val();
    var brand_selected = $('#drop_brands_search').val();
    console.log(busqueda);
    sessionStorage.setItem('busqueda', busqueda);
    window.location.href ='index.php?page=shop';
    sessionStorage.setItem('brand_selected', brand_selected);
}
function btn_search(){
    $('#button-search').on('click', function(){
        var busqueda = $('#search_bar').val();
        var brand_selected = $('#drop_brands_search').val();
        if((brand_selected == 0)&&(busqueda==="")){
            console.log("Selecciona una marca o escribe algo");
        }else{
            console.log(brand_selected);
            give_val_search();
        }
        // sessionStorage.setItem('brand_search', brand_selected);
    })
}

$(document).ready(function (){
    insert_brands_drop();
    btn_search();
});