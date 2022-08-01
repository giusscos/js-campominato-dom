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
    const gridDimWid = parseInt(gridDimWidEl.value);
    const gridDimHei = gridDimWid ** 2;
    gridEl.innerHTML = '';

    gridEl.classList.add('grid');
    console.log(gridDimWid);
    gridEl.style.setProperty('grid-template-columns', `repeat(${gridDimWid}, 1fr)`);
    for(let i = 0; i < gridDimHei; i++){
        gridEl.append(genCell(i));
    }
    return containerEl.append(gridEl)    
}

// Acquisizione e creazione elementi DOM
const gridDimWidEl = document.getElementById('select_diff');
const containerEl = document.querySelector('.container');
const btnPlayEl = document.querySelector('.play_button');
const gridEl = document.createElement('div');

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