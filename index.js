
// ////////////////////////////////toggle-navbar////////////////////


let nemuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('navbar')

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')

    
}
// ////////////////////////////////scroll-section////////////////////
let section = document.querySelectorALL('section');
let navLinks = document.querySelectorALL('header nav a');

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };

    });



    // sticky-navbar
    // Sticky header functionality
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Use window.scrollY
});

// Assuming menuIcon and navbar are defined elsewhere in your code
// Example definitions:
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' }); // Corrected 'button' to 'bottom'
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});






