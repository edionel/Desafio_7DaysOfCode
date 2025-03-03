let listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

function agregarAlimento(alimento, categoria) {
    if (listaCompras[categoria]) {
        listaCompras[categoria].push(alimento);
    } else {
        let crearCategoria = confirm(`La categoría "${categoria}" no existe. ¿Quieres crearla?`);
        if (crearCategoria) {
            listaCompras[categoria] = [alimento];
        } else {
            alert("Alimento no agregado.");
        }
    }
}

function eliminarAlimento() {
    let alimentos = Object.entries(listaCompras)
        .flatMap(([categoria, items]) => items.map(item => `${item} (${categoria})`));

    if (alimentos.length === 0) {
        alert("No hay elementos en la lista para eliminar.");
        return;
    }

    let alimentoAEliminar = prompt(`¿Qué alimento deseas eliminar? Aquí está la lista actual:\n${alimentos.join(", ")}`);
    
    let encontrado = false;
    for (let categoria in listaCompras) {
        const index = listaCompras[categoria].indexOf(alimentoAEliminar);
        if (index !== -1) {
            listaCompras[categoria].splice(index, 1);
            alert(`El alimento "${alimentoAEliminar}" ha sido eliminado de la lista.`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("¡No fue posible encontrar el elemento en la lista!");
    }
}

function mostrarLista() {
    console.log("Lista de compras:");
    for (let categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].sort().join(", ")}`);
        } else {
            console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:`);
        }
    }
}

let agregarOtro = true;

while (agregarOtro) {
    let respuesta = prompt("¿Deseas añadir un alimento a la lista de compras, eliminar uno o salir? (añadir/eliminar/salir)").toLowerCase();

    if (respuesta === "añadir") {
        let alimento = prompt("¿Qué alimento deseas agregar?").trim();
        if (alimento === "") {
            alert("El nombre del alimento no puede estar vacío.");
            continue;
        }
        
        let categoria = prompt("¿En qué categoría se encaja ese alimento? (frutas/lácteos/congelados/dulces)").toLowerCase();
        agregarAlimento(alimento, categoria);
    } else if (respuesta === "eliminar") {
        eliminarAlimento();
    } else if (respuesta === "salir") {
        agregarOtro = false;
    } else {
        alert("Por favor, responde con 'añadir', 'eliminar' o 'salir'.");
    }
}

mostrarLista();
