document.addEventListener('DOMContentLoaded', () => {
    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.padding = '20px 0';
        }
    });

    // Fade-in animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle (simple alert for demo, can be expanded)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    mobileMenuBtn.addEventListener('click', () => {
        alert('Menú móvil en construcción - Aquí se desplegaría el menú de navegación.');
    });
});
