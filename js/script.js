// L'utente indica un livello di difficoltà in base al quale viene generata
//  una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.


const playButton = document.getElementById('play-button');
playButton.addEventListener('click', startGame);

function startGame() {
    const title = document.getElementById('title');
    title.classList.add('hidden')

    const gridGame = document.getElementById('grid-game');
    gridGame.classList.remove('hidden')
    gridGame.innerHTML = '';

    const levelDifficulty = parseInt(document.getElementById('select-level').value);

    let gridMaxNumber;

    let gridMaxLength;

    if (levelDifficulty === 1) {
        gridMaxNumber = 100;
        gridMaxLength = 10;  

    }else if (levelDifficulty === 2) {
        gridMaxNumber = 81;
        gridMaxLength = 9; 
        
    }else if (levelDifficulty === 3) {
        gridMaxNumber = 49;
        gridMaxLength = 7; 
        
    }

    for (let i = 1; i <= gridMaxNumber; i++) {
        
        const newSquare = generateSquare(i, gridMaxLength);

        newSquare.addEventListener('click',clicked )

        gridGame.appendChild(newSquare)
        
    }
    
}

function clicked() {
    this.classList.add('active');
}




function generateSquare(generateNumber, gridSize) {
    
    const square = document.createElement('div');
    square.classList.add('square')
    square.innerHTML = `<span>${generateNumber}</span>`;
    square.style.width = `calc(100% / ${gridSize})`;
    square.style.height = `calc(100% / ${gridSize})`;

    return square
}




