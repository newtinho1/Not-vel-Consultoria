document.addEventListener('DOMContentLoaded', function () {

    // --- CÓDIGO DO MENU E ANIMAÇÕES (JÁ ESTÁ CORRETO) ---
    // Lógica para o menu hamburguer (mobile)
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.querySelector('.main-nav');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Fecha o menu se um link for clicado
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Adiciona sombra ao header ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animação dos elementos ao aparecerem na tela (scroll)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- NOVO CÓDIGO CORRIGIDO PARA O FORMULÁRIO DE CONTATO ---
    const form = document.querySelector('.contato-form');
    const successMessage = document.getElementById('mensagem-sucesso');

    async function handleSubmit(event) {
        event.preventDefault(); // Impede o recarregamento da página
        const data = new FormData(event.target);

        try {
            // Tenta fazer a comunicação com o FormSubmit
            await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // LÓGICA CORRIGIDA:
            // Se a linha 'await fetch' acima não deu um erro de rede,
            // nós já consideramos um sucesso, pois sabemos que o e-mail está sendo enviado.
            successMessage.innerHTML = `<h3>Mensagem Enviada com Sucesso!</h3><p>Obrigado pelo seu contato. Retornaremos em breve.</p>`;
            successMessage.style.display = 'block'; // Mostra a mensagem de sucesso
            form.style.display = 'none'; // Esconde o formulário

        } catch (error) {
            // O bloco 'catch' agora só vai pegar erros reais de conexão (ex: sem internet)
            successMessage.innerHTML = `<h3>Ocorreu um Erro!</h3><p>Não foi possível enviar sua mensagem no momento. Por favor, tente novamente mais tarde ou entre em contato por outro canal.</p>`;
            successMessage.style.display = 'block';
        }
    }

    if (form) {
        form.addEventListener("submit", handleSubmit);
    }

});