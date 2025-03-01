// Generar un número aleatorio entre 0 y 10
const min = 0;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

// Si prefieres un número predefinido, puedes usar la siguiente línea:
// const randomNumber = 7;

let attempts = 3; // Número de intentos
let guessed = false; // Variable para verificar si se adivinó el número

console.log("¡Bienvenido al juego de adivinar el número!");
console.log("Estoy pensando en un número entre 0 y 10.");

while (attempts > 0 && !guessed) {
    // Pedir al usuario que ingrese su suposición
    let userGuess = parseInt(prompt("¿Cuál es tu suposición? (Tienes " + attempts + " intentos restantes)"));

    // Verificar la suposición
    if (userGuess === randomNumber) {
        console.log("¡Felicidades! Adivinaste el número.");
        guessed = true; // Cambiar a verdadero si el usuario adivina
    } else {
        attempts--; // Reducir el número de intentos
        console.log("Incorrecto. Intenta de nuevo.");
    }
}

// Si no se adivina el número después de los intentos
if (!guessed) {
    console.log("Lo siento, no adivinaste el número. El número era: " + randomNumber);
}
