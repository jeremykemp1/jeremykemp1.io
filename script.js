document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my elegant website!');
});

// JavaScript for fading out elements on scroll
document.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    // Adjust the opacity of the hero section
    if (hero) {
        hero.style.opacity = 1 - scrollPosition / 500; // Adjust the divisor to control fade speed
    }

    // Fade the navbar slightly after a certain scroll position
    if (navbar) {
        navbar.style.opacity = scrollPosition > 100 ? 0.9 : 1; // Navbar fades slightly after 100px
    }
});
