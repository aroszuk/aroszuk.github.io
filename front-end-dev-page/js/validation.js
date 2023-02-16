let form = document.getElementById('page-form');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtLastName = document.getElementById('lastName');
    let txtEmail = document.getElementById('email');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię!';
        errors.appendChild(liError);
    }

    if (txtLastName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz nazwisko!';
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '' ) {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Adres e-mail!';
        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }

}



form.addEventListener('submit', validate);