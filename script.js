document.addEventListener('contextmenu',function(event){
    event.preventDefault();
})

/* Changing name */
var typed = new Typed("#changingtext",{
	strings: ["Learner","Programmer","Designer","Developer"],
	typeSpeed:100,
	backSpeed:60,
	loop:true
})
/* toggle button */
document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('menuBar');
    const dropdownMenu = document.getElementById('dropdownmenu');
    const menuItems = document.querySelectorAll('.menu-item');
    const headings = document.querySelectorAll('.headings a');

    // Initially add textglow to Home
    document.getElementById('home').classList.add('textglow');

    // Function to remove textglow from all headings and add to the hovered one
    const addTextGlow = (event) => {
        headings.forEach(heading => {heading.classList.remove('textglow');heading.style.textDecoration='none';});
        event.target.classList.add('textglow');
        event.target.style.textDecoration = 'underline';

    };

    // Add event listeners to headings for hover effect
    headings.forEach(heading => {
        heading.addEventListener('click', addTextGlow);
    });

    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.transform = 'translateX(110%)'; 
            document.body.style.overflowY='auto' // Delay to match the transition
        } else {
            dropdownMenu.style.transform = 'translateX(0)';
            document.body.style.overflowY = 'hidden'
            dropdownMenu.classList.add('show'); 
        }
    });

    // Close the dropdown menu when clicking on a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            document.body.style.overflowY = 'auto';
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.transform = 'translateX(110%)';
            icon.classList.toggle('active');
        });
    });
});

// Nav smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            setTimeout((targetElement)=>{
                targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            },500,targetElement);
        }
    });
});

/* smoothly scroll*/
document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('div');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        });

/* certifications swipper */

var swiper = new Swiper('.swiper-container', {
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
