let amigos = [];

//se señala un vacío ya que aquí se guardarán los nombres ingresados

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
//se obtiene el valor ingresado en el campo de texto mediante document.getElementeById

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");  
        return;
    }
    
//se incluye el alert cuando no se ingresa un nombre vacío, lo cual detiene la función

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
//esta funcion se da con el fin de no repetir nombres, ello con el fin de que al momento de
//ingresar los datos no exista una duplicidad durante el sorteo
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos un nombre para realizar el sorteo.");
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}