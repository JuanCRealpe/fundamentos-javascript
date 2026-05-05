function validar(e) {
    e.preventDefault();

    const edad = document.getElementById("edad").value;
    const cedulaCiudadania = document.getElementById("cc").checked;
    const respuesta = document.getElementById("respuesta");

    if (edad >= 18 && cedulaCiudadania) {
        respuesta.innerHTML = `<span style="color:green;">Registo exitoso</span>`;
    } else if (edad >= 18 && !cedulaCiudadania) {
        respuesta.innerHTML = `<span style="color:red;">falta cedula ciudadania</span>`;
    } else {
        respuesta.innerHTML = `<span style="color:red;">No cumple requisitos</span>`;
    }
}