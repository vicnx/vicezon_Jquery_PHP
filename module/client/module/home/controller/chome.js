$(document).ready(function() {

        $.ajax({ 
            type: 'GET', 
            url: '/vicezon/module/client/module/home/controller/controller_home.php?op=toptablets',
            async:false, 
            dataType: 'json',
            data:{},//idproduct es lo que guardamos para coger en el get LUEGO EL GET TIENE QUE SER ASI ($_GET['idproduct']); y el id ES EL ATRIBUTO
            success: function (data) { 
                for (var i = 0; i < 10; i++) {
                    $('#top-tablets').append(
                        '<div class="item">'+'<h1>'+(i+1)+'</h1>'+'<h2>'+data[i].nombre+'</h2>'+'</div>'
                    )
                 }
            },
            error: function(){
                console.log("error");
            }
    });	
    $.ajax({ 
        type: 'GET', 
        url: '/vicezon/module/client/module/home/controller/controller_home.php?op=brands_card',
        async:false, 
        dataType: 'json',
        data:{},
        success: function (data) { 
                for (var i = 0; i < 6; i++) {
                    $('#brands-cards-homepage').append(
                        '<div class="brand-card">'+'<span>'+data[i].namebrand+'</span></div>'
                    )
                 }

        },
        error: function(){
            console.log("error");
        }
});


    $('.owl-carousel').owlCarousel({
        stagePadding:50,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            400:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })
})