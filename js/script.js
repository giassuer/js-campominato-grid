// L'utente indica un livello di difficoltà in base al quale viene generata
//  una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.


let numberSquare = [];

console.log(numberSquare);

let lunghezza = 0;


let difficoltà = 'facile';


if (difficoltà === 'facile') {
    lunghezza = 100
    
}else if (difficoltà === 'medio') {
    lunghezza = 81

}else if (difficoltà === 'difficile') {
    lunghezza = 49
}


for (let i = 1; i <= lunghezza; i++) {
    // i è la posizione number è il contenuto

    numberSquare.push(i)
    
}


console.log(numberSquare);




