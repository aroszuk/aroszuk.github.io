$('.arrow').on('click', function () {
    $('body, html').animate({
     scrollTop: $('.features').offset().top
    }, 500)
   })