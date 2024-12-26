document.addEventListener('DOMContentLoaded', () => {
    // Disable context menu (optional)
    // document.addEventListener('contextmenu', (event) => event.preventDefault());

    // Typed.js effect
    if (document.getElementById('changingtext')) {
        new Typed("#changingtext", {
            strings: ["Learner", "Programmer", "Designer", "Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

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
            event.target.style.textUnderlineOffset = '8px';
        });
    });

    if (icon && dropdownMenu) {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
                dropdownMenu.style.transform = 'translateX(110%)';
                document.body.style.overflowY = 'auto';
            } else {
                dropdownMenu.style.transform = 'translateX(0%)';
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
    }

    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            setTimeout(()=>{
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }},300);
        });
    });

    // Swiper.js for carousel
    if (document.querySelector('.swiper-container')) {
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
    }

    // Animate list items in .educationboxcontainer
    const container = document.querySelector('.educationboxcontainer ul');
    if (container) {
        const elements = container.children;

        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;

            Array.from(elements).forEach((element, index) => {
                const rect = element.getBoundingClientRect();

                if (rect.top < windowHeight) {
                    // Apply different animations for odd and even children
                    if (index % 2 === 0) {
                        // Even :nth-child - from left to center
                        element.style.transform = window.innerWidth > 780 ? "translateX(-30px)" : "translateX(-11px)";
                    } else {
                        // Odd :nth-child - from right to center
                        element.style.transform = window.innerWidth > 780 ? "translateX(30px)" : "translateX(-11px)";
                    }
                    element.style.opacity = 1;
                    element.style.transition = "all 0.6s ease-in-out";
                } else {
                    // Reset position if out of viewport
                    if (index % 2 === 0) {
                        element.style.transform = window.innerWidth > 780 ? "translateX(-50%)" : "translateX(50%)";
                    } else {
                        element.style.transform = "translateX(50%)";
                    }
                    element.style.opacity = 0;
                }
            });
        });
    }

    // Intersection Observer for .Scroll sections
    const sections = document.querySelectorAll('.Scroll');
    if (sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));
    }
});
