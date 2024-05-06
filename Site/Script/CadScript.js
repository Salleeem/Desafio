// CadScript.js

document.addEventListener("DOMContentLoaded", function() {
    var signupForm = document.querySelector(".signup form");
    var errorMessage = document.querySelector(".error-message");

    // Objeto JSON para armazenar as informações do formulário
    var formData = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        var emailField = document.getElementById("signupEmail");
        var passwordField = document.getElementById("signupPassword");
        var confirmPasswordField = document.getElementById("confirmPassword");

        // Atualiza o objeto JSON com os valores do formulário
        formData.email = emailField.value.trim();
        formData.password = passwordField.value.trim();
        formData.confirmPassword = confirmPasswordField.value.trim();

        // Limpa a mensagem de erro
        errorMessage.textContent = "";

        // Validação do formato do email usando uma expressão regular simples
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errorMessage.textContent = "Por favor, insira um endereço de e-mail válido.";
            return;
        }

        // Verifica se as senhas correspondem
        if (formData.password !== formData.confirmPassword) {
            errorMessage.textContent = "As senhas não coincidem. Por favor, tente novamente.";
            return;
        }

        // Se todos os campos estiverem preenchidos corretamente e as senhas corresponderem, você pode prosseguir com o processo de cadastro
        // Por enquanto, vamos apenas exibir os valores dos campos no console para fins de demonstração
        console.log("Formulário de cadastro:", formData);

        // Aqui você pode adicionar a lógica de envio do formulário, como uma solicitação AJAX
    });
});
// Script/LoginScript.js

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".login form");
    var errorMessage = document.querySelector(".error-message");

    // Função para realizar o login
    function login(email, password) {
        // Aqui você faria uma solicitação para o backend para verificar as credenciais
        // Neste exemplo, vamos apenas simular um login bem-sucedido
        if (email === "user@example.com" && password === "password") {
            alert("Login bem-sucedido!");
        } else {
            displayErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
        }
    }

    // Adiciona um ouvinte de evento para o envio do formulário de login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        var emailField = document.getElementById("loginEmail");
        var passwordField = document.getElementById("loginPassword");

        var email = emailField.value.trim();
        var password = passwordField.value.trim();

        // Simula um login
        login(email, password);
    });

    // Função para exibir mensagens de erro
    function displayErrorMessage(message) {
        errorMessage.textContent = message;
    }
});


const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});