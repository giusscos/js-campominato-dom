// // Funzione per evidenziare le celle  
function bombAct () {
    const cell = this;
    const bombNumArray = genBombArray();
    const lastCell = document.querySelector('.cell:last-child');
    console.log('Hai cliccato la cella >> ' + cell.innerHTML);
    
    if(bombNumArray.includes(parseInt(cell.innerHTML))){
        end(cell);
    }

    // Punteggio Player
    if (counterPoints === parseInt(lastCell.innerHTML) - 17){
        containerEl.innerHTML = 'Hai Vinto con un punteggio di >> ' + counterPoints + '!!!';
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

    // // "New" mode function 
    cellEl.addEventListener('click', bombAct);
    return cellEl;
}

// Funzione per generare la Griglia di celle
// Ritorna l'oggetto Grid appeso al container
function genGrid(){
    const gridDimWid = parseInt(gridDimWidEl.value);
    const gridDimHei = gridDimWid ** 2;
    gridEl.innerHTML = '';

    gridEl.classList.add('grid');
    gridEl.style.setProperty('grid-template-columns', `repeat(${gridDimWid}, 1fr)`);
    for(let i = 0; i < gridDimHei; i++){
        gridEl.append(genCell(i));
    }
    return containerEl.append(gridEl);   
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
    return bombArray;
}

function start(){
    containerEl.innerHTML = '';
    genGrid();
}

function end(cell){
    cell.classList.add('bomb');
    containerEl.classList.add('bomb');
    console.log("Hai Perduto! >> I tuoi Punti >> " + counterPoints);
    // containerEl.innerHTML = 'Hai Perso con un punteggio di >> ' + counterPoints + '!!!';
    counterPoints = 0;
    return false;
}

// Acquisizione e creazione elementi DOM
const gridDimWidEl = document.getElementById('select_diff');
const containerEl = document.querySelector('.container');
const btnPlayEl = document.querySelector('.play_button');
const gridEl = document.createElement('div');

let bombArray = [];
let counterPoints = 0;

// // "New" mode function
btnPlayEl.addEventListener('click', start);