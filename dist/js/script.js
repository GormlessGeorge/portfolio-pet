//hamburger menu

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');

});

close.addEventListener('click', () => {
    menu.classList.remove('active');

});

//percentage bars

const counters = document.querySelectorAll('.skills__percent'),
    lines = document.querySelectorAll('.skills__full-bar');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});