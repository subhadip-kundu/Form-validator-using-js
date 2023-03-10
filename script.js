const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const hero = document.getElementById('hero');


form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email.indexOf('@') === -1 || password.length < 8) {
    message.textContent = '* Invalid email or password!';
    message.style.color = 'red';
    hero.style.boxShadow = "0px 0px 10px red";
  } else {
    message.textContent = 'Valid email and password!';
    message.style.color = 'green';
    hero.style.boxShadow = "0px 0px 10px green";
  }
});
