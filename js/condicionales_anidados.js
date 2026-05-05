function validarLogin(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const resultado = document.getElementById("resultado");

    if (usuario === "admin") {
        if (password === "12345") {
            resultado.innerHTML = `<span style="color:green;">Bienvenido ${usuario}, acceso concedido como administrador</span>`;
        } else {
            resultado.innerHTML = `<span style="color:red;">Hola ${usuario}, la contraseña es incorrecta</span>`;
        }
    } else {
        resultado.innerHTML = `<span style="color:red;">El usuario ${usuario}, no esta autorizado</span>`;
    }
}