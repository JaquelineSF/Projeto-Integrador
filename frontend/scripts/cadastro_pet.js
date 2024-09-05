/*esse script é responsável por validar o formulário 
de cadastro de PETs antes de permitir que ele seja enviado. 
Ele verifica se o usuário preencheu todos os campos obrigatórios
 (nome e espécie) e, se não o fez, exibe uma mensagem de alerta e 
 impede o envio do formulário até que os campos estejam devidamente preenchidos*/
 document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        const nome = document.querySelector('input[name="name"]').value;
        const idade = document.querySelector('input[name="idade"]').value;
        const especie = document.querySelector('input[name="espec"]').value;
        const caracteristicas = document.querySelector('input[name="caracter"]').value;
        const raca = document.querySelector('input[name="raca"]').value;
        const sexo = document.querySelector('input[name="sexo"]:checked'); // Verifica se algum sexo foi selecionado
        const fotos = document.querySelector('input[name="files"]').files.length; // Verifica se há fotos selecionadas

        // Verifica se algum campo obrigatório está vazio ou não selecionado
        if (!nome || !idade || !especie || !caracteristicas || !raca || !sexo || fotos === 0) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            event.preventDefault(); // Impede o envio do formulário
        } else {
            alert('Todos os campos foram preenchidos corretamente! O formulário será enviado.');
            // O formulário será enviado normalmente, sem event.preventDefault()
        }
    });
});
