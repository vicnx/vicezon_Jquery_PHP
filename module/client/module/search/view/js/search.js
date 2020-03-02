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

function btn_search(){
    $('#button-search').on('click', function(){
        var brand_selected = $('#drop_brands_search').val();
        if(brand_selected == 0){
            console.log("Selecciona una marca");
        }else{
            console.log(brand_selected);
        }
        // sessionStorage.setItem('brand_search', brand_selected);
    })
}

$(document).ready(function (){
    insert_brands_drop();
    btn_search();
});