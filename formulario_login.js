var campoLogin = '';
var campoPassword = '';
var validade = false;
var userValido = false;
var passwordValida = false;

function exportarCampos (login, password) {
    campoLogin = login;
    campoPassword = password;
}

function login(){
    validade = validarLogin();
    if (validade === true) {
        limparCampos();
        mostrarAlerta("Login realizado com sucesso!");
    } else {
        reconhecerErro(userValido, passwordValida);
    }
}

function validarLogin(){
    userValido = validarUsuario(campoLogin);
    passwordValida = validarSenha(campoPassword);
    if (userValido === true && passwordValida === true){
        return true;
    } else {
        return false;
    }
}

function validarUsuario (login) {
    if (login != undefined && login.trim() !== ''){
        return true;
    } else {
        return false;
    }
}

function validarSenha (password) {
    if (password != undefined && password.trim() !== '' && !password.includes(' ')){
        return true;
    } else {
        return false;
    }
}

function mostrarAlerta(alerta){
    alert(alerta);
}

function reconhecerErro(user, password) {
    if (user === true) {
        mostrarAlerta("Por favor, informe sua senha.");
    } else if (password === true) {
        mostrarAlerta("Por favor, informe seu usuário.");
    } else {
        mostrarAlerta("Por favor, informe seu usuário e sua senha.");
    }
}

function limparCampos() {
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
    campoLogin = '';
    campoPassword = '';
}
