// Funciones para cada operación
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

// Función principal de la calculadora
function calculadora() {
  let continuar = true;
  while (continuar) {
    // Mostrar menú de operaciones
    console.log("Seleccione una operación: ");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");

    // Leer opción del usuario
    const opcion = prompt( "Ingrese el número de la operación que desea realizar:" );

    if (opcion === "5") {
      console.log("Hasta la próxima");
      continuar = false;
      break;
    }

    // Leer los dos números
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado;

    // Ejecutar la operación seleccionada
    switch (opcion) {
      case "1":
        resultado = sumar(num1, num2);
        console.log(`El resultado de la suma es: ${resultado}`);
        break;
      case "2":
        resultado = restar(num1, num2);
        console.log(`El resultado de la resta es: ${resultado}`);
        break;
      case "3":
        resultado = multiplicar(num1, num2);
        console.log(`El resultado de la multiplicación es: ${resultado}`);
        break;
      case "4":
        resultado = dividir(num1, num2);
        console.log(`El resultado de la división es: ${resultado}`);
        break;
      default:
        console.log("Opción no válida. Intente de nuevo.");
    }
  }
}

// Ejecutar la calculadora
calculadora();
