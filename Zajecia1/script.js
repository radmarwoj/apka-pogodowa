const userName = document.querySelector('input#name');
const email = document.querySelector('input#email');
const pass1 = document.querySelector('input#password1');
const pass2 = document.querySelector('input#password2');
const resetBtn = document.querySelector('input#reset');
const submitBtn = document.querySelector('input#submit');

function showOrHideErrorMessage(input, text) {
    const box = input.parentElement;
    const errMess = box.querySelector('p.err_mess');
    errMess.textContent = text;
}

function checkInputsLength (input, minLength) {
    // funkcja sprawdza czy pole input ma wkazaną ilość znaków/
    // dla imienia - 3 znaki
    // dla hasła - 8 znaków
    if (input.value.length < minLength) {
        showOrHideErrorMessage(input, `Pole ${input.previousElementSibling.
        textContent.toLowerCase().replace('*', "").replace(":", '')}
        powinno zawierać minimum ${minLength} znaki.`)
    } else {
        console.log("OK");
    }
}

function checkPasswords() {
    // napisać funkcję sprawdzającą znaki w polach haseł
    if (pass1.value !== pass2.value) {
        showOrHideErrorMessage(pass2, "Hasła są różne");
    } else {
        showOrHideErrorMessage(pass2, "");
    }
}

function checkEmail() {
    const re = 
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()
    [\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(email.value)) {
        showOrHideErrorMessage(email, "Adres email jest niepoprawny");
    } else {
        showOrHideErrorMessage(email, "");
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputsLength(userName, 3);
    checkInputsLength(pass1, 8);
    checkPasswords();
    checkEmail();
})

resetBtn.addEventListener('click', () => {

})
