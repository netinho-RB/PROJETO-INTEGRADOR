// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('email').value; // Obtém o email
        const senha = document.getElementById('senha').value; // Obtém a senha

        // Verifica as credenciais
        if (email === 'admin@admin.com' && senha === 'admin') {
            alert('Login bem-sucedido!');
            window.location.href = 'dashboard.html'; // Redireciona para dashboard.html
        } else {
            alert('Email ou senha inválidos!');
        }
    });
});
