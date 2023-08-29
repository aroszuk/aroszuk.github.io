// const headHeight = $('nav').height();


$('.menu li a').on('click', function () {
  const goToSection = "[data-section=" + $(this).attr('class') + "]";
  $('body, html').animate({
   scrollTop: $(goToSection).offset().top - 50
  })
 });