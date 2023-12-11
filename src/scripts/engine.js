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

for (let i = 0; i < emojis.length; i++) {
    // Cria o elemento que conterá os emojis
    let box = document.createElement('div');
    box.className = "item"; // add classe
    box.innerHTML = shuffleEmojis[i]; // Insere emoji

    box.onclick = handleClick; // Seta função ao clique

    document.querySelector('.game').appendChild(box); // Add todos os emojis dentro de um container
}

function handleClick() {
    // Verifica quantas cartas foram abertas
    if (openCards.length < 2) {
        // Cada carta aperta recebe a classe
        this.classList.add("boxOpen");

        // Guarda a carta aberta para realizar comparação
        openCards.push(this);
    }

    // Comparação
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500)
    }

    console.log(openCards)

};


// Verifica se as cartas são iguais
function checkMatch() {

    // Se forem iguais -> mantém as cartas viradas
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    // Zera o vetor
    openCards = [];

    // Se todas as cartas forem desviradas
    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert('Parabéns! \nVocê venceu! 🏆')
    }

};