/*esse script é responsável por validar o formulário 
de cadastro de PETs antes de permitir que ele seja enviado. 
Ele verifica se o usuário preencheu todos os campos obrigatórios
 (nome e espécie) e, se não o fez, exibe uma mensagem de alerta e 
 impede o envio do formulário até que os campos estejam devidamente preenchidos*/
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
