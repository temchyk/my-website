const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
