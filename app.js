// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre");
    const btnAgregar = document.getElementById("adicionar");
    const btnSortear = document.getElementById("sortear");
    const listaNombres = document.getElementById("lista");
    const resultado = document.getElementById("resultado");
    
    let nombres = [];

    btnAgregar.addEventListener("click", () => {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    });

    btnSortear.addEventListener("click", () => {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;
    });

    function actualizarLista() {
        listaNombres.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }
});
