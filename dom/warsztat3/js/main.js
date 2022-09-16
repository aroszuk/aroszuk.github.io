let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {


    let textName = document.getElementById('name');
    let textEmail = document.getElementById('email');
    let errors = document.querySelector('.errors');
    let agree1 = document.getElementById('agree-1');

    errors.innerText = '';

    if (textName.value.trim() === '') {

        let liError = document.createElement('li');
        liError.innerText = 'Podaj Nazwisko!';
        errors.appendChild(liError);

    }

    if (textEmail.value.trim() === '') {

        let liError = document.createElement('li');
        liError.innerText = 'Podaj email!';
        errors.appendChild(liError);

    }

    if (!textEmail.value.includes('@')) {

        let liError = document.createElement('li');
        liError.innerText = 'Adres musi zawierać @';
        errors.appendChild(liError);

    }

    if (!agree1.checked) {

        let liError = document.createElement('li');
        liError.innerText = 'Musisz zaznaczyć zgodę 1';
        errors.appendChild(liError);

    }

    if (errors.children.length > 0) {

        event.preventDefault();
    }
    
}

const allAgree = (event) => {

    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

}   




newsletterForm.addEventListener('submit', validate);

allAgreeChx.addEventListener('change', allAgree);