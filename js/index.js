document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navegacion = document.querySelector('.navegacion');

    // Efecto de scroll en el header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menú hamburguesa
    if (menuToggle && navegacion) {
        menuToggle.addEventListener('click', () => {
            navegacion.classList.toggle('active');
        });
    }
});