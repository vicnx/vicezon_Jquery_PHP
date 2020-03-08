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
function click_auto_element(){
    $('#autocomplete').on('click',"a", function(){
        console.log("click");
        var idproduct= $(this).attr("id");
        localStorage.setItem("product", idproduct);
        window.location.href ='index.php?page=shop';
    }
)}
function autocomplete(){
    $('#search_bar').on('keyup', function(){
        give_values_autocomplete();
    })
    click_auto_element();
}

function give_values_autocomplete(){
    var busqueda = $('#search_bar').val();
    var brand_selected = $('#drop_brands_search').val();
    console.log("brand_selected"+brand_selected);
    if (brand_selected == 0){
        var rurl="/vicezon/module/client/module/search/controller/csearch.php?op=autocomplete&busqueda="+busqueda;
        console.log(rurl);
    }else{
        var rurl ="/vicezon/module/client/module/search/controller/csearch.php?op=autocomplete&busqueda="+busqueda+"&brand_selected="+brand_selected;
    }
    if(busqueda===""){
        $("#autocomplete").empty();
    }else{
        $.ajax({
            type: "GET",
            url:rurl,  
            dataType: 'json',
            success: function (data) { 
                console.log(data.length);
                $("#autocomplete").empty();
                for (i = 0; i < data.length; i++) {
                    $("#autocomplete").append(
                        '<a  class="auto_element" data="'+data[i].marca+'" id="'+data[i].idproduct+'">'+data[i].nombre+'</a>'
                    )
                }
            },
            error: function(){
                console.log("error ");
            }
        })
    }
}
function onchange_brand_search(){
    $('#drop_brands_search').on('change', function(){
        console.log("onchange oN");
        give_values_autocomplete();
    })
}
$(document).ready(function (){
    onchange_brand_search()
    insert_brands_drop();
    btn_search();
    autocomplete();
    click_auto_element();
});