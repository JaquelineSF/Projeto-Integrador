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
