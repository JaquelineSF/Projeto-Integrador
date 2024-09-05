/*esse script é responsável por identificar qual página
 está sendo exibida no momento e destacar automaticamente o 
 link de navegação correspondente. Isso melhora a experiência 
 do usuário, mostrando claramente em qual página ele está ao navegar pelo site.*/
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a, footer nav a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
