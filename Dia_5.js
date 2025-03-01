let listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

let agregarOtro = true;

while (agregarOtro) {
    let respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no)").toLowerCase();

    if (respuesta === "sí") {
        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría se encaja ese alimento? (frutas/lácteos/congelados/dulces)");

        switch (categoria.toLowerCase()) {
            case "frutas":
                listaCompras.frutas.push(alimento);
                break;
            case "lácteos":
                listaCompras.lacteos.push(alimento);
                break;
            case "congelados":
                listaCompras.congelados.push(alimento);
                break;
            case "dulces":
                listaCompras.dulces.push(alimento);
                break;
            default:
                alert("Categoría no válida. Intenta de nuevo.");
                break;
        }
    } else if (respuesta === "no") {
        agregarOtro = false;
    } else {
        alert("Por favor, responde con 'sí' o 'no'.");
    }
}

console.log("Lista de compras:");
for (let categoria in listaCompras) {
    if (listaCompras[categoria].length > 0) {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].join(", ")}`);
    } else {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:`);
    }
}
