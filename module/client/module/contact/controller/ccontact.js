$(function() {
    var menu = $("#menunav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            menu.removeClass('transparent').addClass("bg-dark");
        } else {
            menu.removeClass("bg-dark").addClass('transparent');
        }
    });
});
