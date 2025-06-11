document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA O MENU HAMBURGUER (MOBILE) ---
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Fecha o menu se um link for clicado (útil para one-page)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });


    // --- ADICIONA SOMBRA AO HEADER AO ROLAR A PÁGINA ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- ANIMAÇÃO DOS ELEMENTOS AO APARECEREM NA TELA (SCROLL) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Pega todos os elementos que devem ser animados
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

});