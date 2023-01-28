$('.arrow').on('click', function () {
    $('body, html').animate({
     scrollTop: $('.features').offset().top - $('header nav').height()
    }, 500)
   })