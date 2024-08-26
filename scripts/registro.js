/*esse script adiciona funcionalidade ao botão de alternância
 de senha, permitindo ao usuário alternar entre mostrar e ocultar
  a senha no campo de entrada. Isso melhora a usabilidade, permitindo 
  que os usuários verifiquem a senha digitada e garantam que está correta 
  antes de enviar o formulário.*/
document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordButton = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    togglePasswordButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.textContent = 'Ocultar senha';
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.textContent = 'Mostrar senha';
        }
    });
});
