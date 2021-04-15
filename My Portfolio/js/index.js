const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});



/*==== SCROLL REVEAL ANIMATION ====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.section__title section__title--intro',{})
sr.reveal('.section__subtitle section__subtitle--intro',{delay: 200})
sr.reveal('.card',{delay: 200})
sr.reveal('.intro__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

/*SCROLL PROJECT*/
sr.reveal('.section__title section__title--projects',{})
sr.reveal('.project',{delay: 200})
sr.reveal('.cards2',{delay: 400})

/* SCROLL ABOUT*/
sr.reveal('.section__title section__title--about',{})
sr.reveal('.section__subtitle--about',{delay: 200})
sr.reveal('.about-me__body',{interval: 200})
sr.reveal('.about-me__img',{delay: 400})

/*SCROLL WORK*/
sr.reveal('.section__title section__title--work',{})
sr.reveal('.section__subtitle section__subtitle--work',{interval: 200})
sr.reveal('.portfolio__item',{interval: 200})
sr.reveal('.about-me__img',{delay: 400})

/* SCROLL FOOTER*/
sr.reveal('.footer',{})
sr.reveal('.footer-link',{delay: 200})
sr.reveal('.social-list__link',{interval: 200})
sr.reveal('.copy',{delay: 400})


