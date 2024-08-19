document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const nome = document.querySelector('input[name="nome"]').value;
        const especie = document.querySelector('select[name="especie"]').value;

        if (!nome || !especie) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            event.preventDefault();
        }
    });
});
