const resultadoArray = document.getElementById("resultadoArray");

let productos = [];

const form = document.getElementById("formProducto");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = Number(document.getElementById("precio").value);
    const nuevoProducto = {
        nombre: nombre,
        precio: precio
    };
    productos.push(nuevoProducto);
    resultadoArray.innerHTML = `Producto agregado: ${nombre}`;
    form.reset();
});

function mostrarProductos() {
    let texto = "<h3>Lista de productos:</h3>";
    productos.forEach(p => {
        texto += `${p.nombre} - $${p.precio} <br>`;
    });
    resultadoArray.innerHTML = texto;
}

function filtrarCaros() {
    const caros = productos.filter(p => p.precio > 100);

    let texto = "<h3>Productos caros:</h3>";
    caros.forEach(p => {
        texto += `${p.nombre} - $${p.precio} <br>`;
    });
    resultadoArray.innerHTML = texto;
}

function aplicarDescuento() {
    const conDescuento = productos.map(p => {
        return {
            nombre: p.nombre,
            precio: p.precio * 0.9
        };
    });

    let texto = "<h3>Productos con descuento:</h3>";
    conDescuento.forEach(p => {
        texto += `${p.nombre} - $${p.precio.toFixed(2)} <br>`;
    });
    resultadoArray.innerHTML = texto;
}