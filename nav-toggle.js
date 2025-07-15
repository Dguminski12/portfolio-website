// scripts/nav-toggle.js
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navUl = document.querySelector('nav ul');
    if (navToggle && navUl) {
        navToggle.addEventListener('click', function () {
            navUl.classList.toggle('open');
        });
        navToggle.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') navUl.classList.toggle('open');
        });
    }
});