let btn = document.querySelector('button');

const setBackground = () => {

    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
}




btn.addEventListener('click', setBackground);