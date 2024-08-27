/*esse script adiciona funcionalidade ao botão de alternância
 de senha, permitindo ao usuário alternar entre mostrar e ocultar
  a senha no campo de entrada. Isso melhora a usabilidade, permitindo 
  que os usuários verifiquem a senha digitada e garantam que está correta 
  antes de enviar o formulário.*/
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const togglePasswordButton = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    // Alternar visibilidade da senha
    togglePasswordButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.textContent = 'Ocultar senha';
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.textContent = 'Mostrar senha';
        }
    });

    // Validação do formulário
    form.addEventListener('submit', (event) => {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const state = document.getElementById('state').value;
        const cep = document.getElementById('cep').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const cpassword = document.getElementById('cpassword').value;

        // Verificar se algum campo está vazio
        if (!fname || !lname || !state || !cep || !email || !password || !cpassword) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Verificar se as senhas coincidem
        if (password !== cpassword) {
            alert('As senhas não coincidem.');
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});
