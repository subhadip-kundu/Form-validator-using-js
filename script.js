const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email.indexOf('@') === -1 || password.length < 8) {
    message.textContent = '* Invalid email or password!';
    message.style.color = 'red';
  } else {
    message.textContent = 'Valid email and password!';
    message.style.color = 'green';
  }
});
