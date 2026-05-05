// promesa basica
const promesa = new Promise((resolve, reject) => {
    let exito = true;

    setTimeout(() => {
    if (exito) {
        resolve("Operación exitosa ✅");
    } else {
        reject("Error en la operación ❌");
    }
    }, 2000);
});

promesa
    .then(resultado => {
    console.log(resultado);
    })
    .catch(error => {
    console.log(error);
    });

// simulacion de compra en linea
const comprarProducto = new Promise((resolve, reject) => {
    let dineroDisponible = 500;
    let precioProducto = 300;

    setTimeout(() => {
    if (dineroDisponible >= precioProducto) {
        resolve("Compra realizada con éxito 🛒");
    } else {
        reject("No tienes suficiente dinero ❌");
    }
    }, 2000);
});

comprarProducto
    .then(mensaje => {
    console.log(mensaje);
    })
    .catch(error => {
    console.log(error);
    });