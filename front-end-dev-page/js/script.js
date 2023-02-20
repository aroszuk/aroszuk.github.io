$(document).on('scroll', function() {

    const scrollValue = $(this).scrollTop();
    const logos = $('.brand');
    const navi = $('.main-nav');
    const header = $('header');
    const headerHeight = header.height();
    const div = $('.introduction-item');
    

    if (scrollValue > 100 ) {

        $('nav').addClass('blure');

    } 

    if (scrollValue < 100) {
        $('nav').removeClass('blure');

    }

    const scaleVal = (1 - (scrollValue/headerHeight));


    if(scaleVal >= 0) {
    div.css({
        'opacity': 1 - (scrollValue/headerHeight)*2,
        'transform':'scale(' + scaleVal + ')'
   });
};
});

