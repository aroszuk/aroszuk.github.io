function changeDot() {

    const scrollValue = $(window).scrollTop();
    const heightS2 = $('.s2').offset().top;
    const heightS3 = $('.s3').offset().top;
    const heightS4 = $('.s4').offset().top;
    const heightS5 = $('.s5').offset().top;
    const heightS6 = $('.s6').offset().top;
    const headHeight = $('nav').height();

    if (scrollValue < heightS2 - headHeight) {
        
        $('.menu a').not('.dot1').removeClass('run');
        $('.dot1').addClass('run');
    }
      else if (scrollValue < heightS3 - headHeight) {

        $('.menu a').not('.dot2').removeClass('run');
        $('.dot2').addClass('run');
      } 
        else if (scrollValue < heightS4 - headHeight) {

        $('.menu a').not('.dot2').removeClass('run');
        $('.dot2').addClass('run');
        }  
          else if (scrollValue < heightS5 - headHeight)   {

        $('.menu a').not('.dot4').removeClass('run');
        $('.dot4').addClass('run');

          } else if (scrollValue < heightS6 - headHeight) {

          $('.menu a').not('.dot4').removeClass('run');
          $('.dot4').addClass('run'); 

          } else {

            $('.menu a').not('.dot6').removeClass('run');
            $('.dot6').addClass('run'); 

          }


        }

$(window).on('scroll', changeDot);



const headHeight = $('nav').height();


$('.menu a, .menu-mobile a').on('click', function () {
  const goToSection = "[data-section=" + $(this).attr('class') + "]";
  $('body, html').animate({
   scrollTop: $(goToSection).offset().top - headHeight
  })
 })