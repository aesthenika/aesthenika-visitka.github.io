$(document).ready(function () {
    //Modal
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation').fadeOut('slow');
    });

    $('[data-modal=thanks]').on('click', function(){
        $('.overlay, #thanks').fadeIn('slow');
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #thanks').fadeOut('slow');
    });
});
 