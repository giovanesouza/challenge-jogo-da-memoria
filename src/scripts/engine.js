// Guarda os emojis que aparecerão nas cartas
const emojis = [
    "😺",
    "😺",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮"
]; 

// Guarda as cartas abertas
let openCards = [];

// Embaralha os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++) {
    // Cria o elemento que conterá os emojis
    let box = document.createElement('div');
    box.className = "item"; // add classe
    box.innerHTML = shuffleEmojis[i]; // Insere emoji

    document.querySelector('.game').appendChild(box); // Add todos os emojis dentro de um container
}