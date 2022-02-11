//event added to button

document.getElementById('log-in-button').addEventListener('click', function() {
    //getting input fields
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('password-field');

    const userPassword = passwordField.value;
    if (userEmail == 'eshratjahan701@gmail.com' && userPassword == 'eshrat12@') {
        window.location = 'bank.html';

    }


})