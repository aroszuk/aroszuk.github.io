$('.hamburger').on('click', function() {

    $(this).toggleClass('is-active');

})


$('.mobile-hamburger').on('click', function() {

    $('.open-menu-holder').toggleClass('open');
    $('.main-nav').toggleClass('hide');
    
})