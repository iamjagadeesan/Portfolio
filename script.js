document.addEventListener('DOMContentLoaded', () => {
    // Disable context menu
    document.addEventListener('contextmenu', (event) => event.preventDefault());

    // Typed.js effect
    new Typed("#changingtext", {
        strings: ["Learner", "Programmer", "Designer", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Toggle button and dropdown menu
    const icon = document.getElementById('menuBar');
    const dropdownMenu = document.getElementById('dropdownmenu');
    const menuItems = document.querySelectorAll('.menu-item');
    const headings = document.querySelectorAll('.headings a');

    // Apply underline effect on click
    headings.forEach((heading) => {
        heading.addEventListener('click', (event) => {
            headings.forEach((head) => {
                head.style.textDecoration = 'none';
            });
            event.target.style.textDecoration = 'underline';
        });
    });

    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.transform = 'translateX(110%)';
            document.body.style.overflowY = 'auto';
        } else {
            dropdownMenu.style.transform = 'translateX(-1%)';
            document.body.style.overflowY = 'hidden';
            dropdownMenu.classList.add('show');
        }
    });

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            document.body.style.overflowY = 'auto';
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.transform = 'translateX(110%)';
            icon.classList.toggle('active');
        });
    });

    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                setTimeout((targetElement) => {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 500, targetElement);
            }
        });
    });

    // Intersection Observer for animations
    const sections = document.querySelectorAll('div');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Swiper.js for carousel
    new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
