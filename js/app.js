// // Funzione per evidenziare le celle  
function bombAct () {
    const cell = this;
    console.log('Hai cliccato la cella >> ' + cell.innerHTML);
    
    cell.removeEventListener('click', bombAct);
    return cell.classList.toggle('clicked');
}

// Funzione per generare le Celle della Griglia
// Ritorna oggetti Celle
function genCell(e){
    const cellEl = document.createElement('div');
    cellEl.classList.add('cell');
    cellEl.innerHTML = e + 1;

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
    gridEl.classList.add('grid');
    for(let i = 0; i < gridDimHei; i++){
        gridEl.append(genCell(i));
    }
    return containerEl.append(gridEl)    
}

// Acquisizione e creazione elementi DOM
const containerEl = document.querySelector('.container');
const btnPlayEl = document.querySelector('.play_button');
const gridEl = document.createElement('div');

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
btnPlayEl.addEventListener('click', genGrid);