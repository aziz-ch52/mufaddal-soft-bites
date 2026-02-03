// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Reveal Animations on Scroll
const reveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', reveal);
reveal();

// Logo Shrink on Scroll
window.addEventListener('scroll', () => {
  const logoImg = document.querySelector('.nav-logo-img');
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    logoImg.style.height = '35px';
    header.style.padding = '0.7rem 5%';
  } else {
    logoImg.style.height = '45px';
    header.style.padding = '1rem 5%';
  }
});
