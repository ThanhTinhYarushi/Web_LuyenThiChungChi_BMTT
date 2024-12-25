const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginBtnForm = document.getElementById('login-btn');
const regBtnForm = document.getElementById('reg-btn');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

// open otp
loginBtnForm.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '../pages/otp/otp.html';
});

regBtnForm.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '../pages/otp/otp.html';
});
