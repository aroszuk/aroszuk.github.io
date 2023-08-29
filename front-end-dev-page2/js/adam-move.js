$(document).on('scroll', function() {

    const scrollValue = $(this).scrollTop();
    const header = $('.main-header');
    const headerHeight = header.height();
    const div = $('.introduction-item');
    

    const scaleVal = (1 - (scrollValue/headerHeight));


    if(scaleVal >= 0) {
    div.css({
        'opacity': 1 - (scrollValue/headerHeight)*2,
        'transform':'scale(' + scaleVal + ')'
   });
};
});

