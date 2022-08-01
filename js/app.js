// // Funzione per evidenziare le celle  
function bombAct () {
    const cell = this;
    const bombNumArray = genBombArray();
    console.log('Hai cliccato la cella >> ' + cell.innerHTML);
    
    if(bombNumArray.includes(parseInt(cell.innerHTML))){
        cell.classList.add('bomb');
        console.log("Hai Perduto! >> I tuoi Punti >> " + counterPoints);
        containerEl.classList.add('bomb');
        // containerEl.innerHTML = 'Hai Perso con un punteggio di >> ' + counterPoints + '!!!';
        console.log('Hai Perso con un punteggio di >> ' + counterPoints + '!!!');
        counterPoints = 0;
    }
    // Punteggio Player
    if (counterPoints === gridDimHei - 17){
        // containerEl.innerHTML = 'Hai Vinto con un punteggio di >> ' + counterPoints + '!!!';
        console.log('Hai Vinto con un punteggio di >> ' + counterPoints + '!!!');
    } else{
        console.log("I tuoi Punti >> " + counterPoints);
        counterPoints++;
    }

    cell.removeEventListener('click', bombAct);
    return cell.classList.toggle('clicked');
}

// Funzione per generare le Celle della Griglia
// Ritorna oggetti Celle
function genCell(e){
    const cellEl = document.createElement('div');
    cellEl.classList.add('cell');
    cellEl.innerHTML = e + 1;
    cellEl.dataset.numero = e + 1;

    // // "Old" mode function 
    // cellEl.addEventListener('click', function(){
    //     cellEl.classList.toggle('clicked');
    //     console.log('Hai cliccato la cella >> ' + (e + 1));
    // });

    // // "New" mode function 
    cellEl.addEventListener('click', bombAct);
    return cellEl;
}

// Funzione per generare la Griglia di celle
// Ritorna l'oggetto Grid appeso al container
function genGrid(){
    gridEl.innerHTML = '';
    gridEl.classList.add('grid');
    for(let i = 0; i < gridDimHei; i++){ 
        gridEl.append(genCell(i));
    }
    return containerEl.append(gridEl)    
}

function start(){
    containerEl.innerHTML = '';
    genGrid();
}

// Funzione per generare la int compresi tra un intervallo
// Ritorna un numero compreso tra 1 e 16
function genInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione per generare l'array utilizzato per la posizione delle bombe
// Ritorna l'array con la posizione delle bombe
function genBombArray() {
    let i = 0;
    while(bombArray.length < 16){
        const numBomb = genInt(1,100);
        if(!bombArray.includes(numBomb)){
            bombArray.push(numBomb);
        }
        i++;
    }
    return bombArray
}

// Acquisizione e creazione elementi DOM
const containerEl = document.querySelector('.container');
const btnPlayEl = document.querySelector('.play_button');
const gridEl = document.createElement('div');

let bombArray = [];
let counterPoints = 0;
const gridDimWid = 10;
const gridDimHei = gridDimWid ** 2;

// // "Old" mode function 
// btnPlayEl.addEventListener('click', function() {
//     const gridEl = document.createElement('div');
//     gridEl.classList.add('grid');
    
//     for(let i = 0; i < gridDimHei; i++){
//         const cellEl = document.createElement('div');
//         cellEl.classList.add('cell');
//         cellEl.innerHTML = i + 1;   
        
//         gridEl.append(cellEl);
//     }
//     containerEl.append(gridEl);
//     console.log(gridEl);
// });

// // "New" mode function
btnPlayEl.addEventListener('click', start);
console.log(genBombArray());