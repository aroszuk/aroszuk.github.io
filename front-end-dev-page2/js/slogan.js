

       

       $(document).on('scroll', function() {

        const slogan = $('.slogan');
        const scrollPos = $(document).scrollTop();
        const sloganOffset = slogan.offset().top
        const sloganHeight = slogan.height();
        let scrollY = scrollPos - sloganOffset

    

        
       
        slogan.css({
        
            'filter' : 'grayscale(' + ((scrollY*2)/sloganHeight)*100 + '%)'
       });
    
});

