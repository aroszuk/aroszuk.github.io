// const burger = document.querySelector('.hamburger');

$('.hamburger').on('click', function() {

    $(this).toggleClass('is-active');

})

// burger.addEventListener('click', function() {

// this.classList.toggle('is-active');

// });

$('.mobile-hamburger').on('click', function() {

    $('.open-menu-holder').toggleClass('open');
})




// document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function(){

//     document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
// });