document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a, footer nav a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
