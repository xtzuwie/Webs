// Ensure the script runs after the DOM content has loaded
document.addEventListener('DOMContentLoaded', function() {
  // Scroll event listener
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Function to toggle the menu
  function toggleMenu() {
    const nav = document.querySelector('.nav'); // Fixed the selector to '.nav'
    nav.classList.toggle('open'); // Toggle the 'open' class
  }

  // Attach the toggleMenu function to the hamburger icon
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }
});
