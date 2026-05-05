    function cargarUsuario() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultadoFetch").innerHTML =
            "👤 Nombre: " + data.name + "<br>" +
            "📧 Email: " + data.email + "<br>" +
            "🏙️ Ciudad: " + data.address.city;
        })
        .catch(error => {
            document.getElementById("resultadoFetch").innerHTML =
            "❌ Error al cargar datos";
        });
    }