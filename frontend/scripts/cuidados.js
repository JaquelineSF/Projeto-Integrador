// Função para expandir e colapsar seções
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section h2');

    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
