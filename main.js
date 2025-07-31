let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active'); // Hide navbar when search opens
};

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active'); // Hide search when menu opens
};

// Scroll event listener
window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
    header.classList.toggle('active', window.scrollY > 0);
});
