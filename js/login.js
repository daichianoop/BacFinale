const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginForm = document.querySelector('.sign-in form');
const errorMessage = document.getElementById('error-message');
const inputFields = loginForm.querySelectorAll('input');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function hideErrorMessage() {
    errorMessage.classList.remove('show');
    errorMessage.classList.add('hide');
}

inputFields.forEach(input => {
    input.addEventListener('input', hideErrorMessage);
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = data.redirect;
        } else {
            errorMessage.textContent = data.error;
            errorMessage.classList.remove('hide');
            errorMessage.classList.add('show');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred. Please try again.';
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('show');
    });
});