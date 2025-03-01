// Comenzamos el juego
alert("¡Bienvenido al juego de decisiones de programación!");

let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?").toLowerCase();

if (area === "front-end") {
    let frontEndChoice = prompt("¿Quieres aprender React o Vue?").toLowerCase();
    if (frontEndChoice === "react") {
        alert("¡Genial! Estás eligiendo aprender React.");
    } else if (frontEndChoice === "vue") {
        alert("¡Excelente elección! Estás eligiendo aprender Vue.");
    } else {
        alert("Opción no válida. Te recomendamos investigar más sobre ambos.");
    }
} else if (area === "back-end") {
    let backEndChoice = prompt("¿Quieres aprender C# o Java?").toLowerCase();
    if (backEndChoice === "c#") {
        alert("¡Genial! Estás eligiendo aprender C#.");
    } else if (backEndChoice === "java") {
        alert("¡Excelente elección! Estás eligiendo aprender Java.");
    } else {
        alert("Opción no válida. Te recomendamos investigar más sobre ambos.");
    }
} else {
    alert("Opción no válida. Por favor, elige entre Front-End o Back-End.");
}

// Elección de especialización
let specialization = prompt("¿Quieres seguir especializándote en el área elegida o convertirte en Fullstack?").toLowerCase();

if (specialization === "especializándote") {
    alert("¡Perfecto! Te estás especializando en tu área elegida.");
} else if (specialization === "fullstack") {
    alert("¡Gran decisión! Te convertirás en un desarrollador Fullstack.");
} else {
    alert("Opción no válida. Por favor, elige entre especializándote o Fullstack.");
}

// Ingreso de tecnologías a aprender
let tecnologias = [];
let continuar = "ok";

while (continuar.toLowerCase() === "ok") {
    let tecnologia = prompt("¿Qué tecnología te gustaría aprender?");
    tecnologias.push(tecnologia);
    continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Responde 'ok' para continuar o cualquier otra cosa para finalizar.");
}

// Mensaje final
for (let i = 0; i < tecnologias.length; i++) {
    alert(`¡Genial! Aprenderás sobre ${tecnologias[i]}!`);
}

alert("¡Gracias por jugar! ¡Buena suerte en tu camino de aprendizaje!");
