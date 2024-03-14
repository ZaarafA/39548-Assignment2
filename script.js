// Declare global variables
let numRows = 3;
let numCols = 3;
let colorSelected; 

// DOM Selectors
const grid = document.getElementById('grid');
const rows = document.getElementsByTagName('tr')
const columns = document.getElementsByTagName('td') // Collection of All Cells


// Add a row
function addR() {    
    // create a new table row and add as many cells to it as there are columns
    let new_row = document.createElement('tr');
    for (let j=0;j<numCols;j++){
        let new_cell = document.createElement('td');
        new_cell.style.backgroundColor = 'white';
        new_row.appendChild(new_cell)
    }
    grid.appendChild(new_row);

    numRows++;
    console.log("Clicked Add Row");
}

// Add a column
function addC() {
    numCols++;

    Array.from(rows).forEach(e =>{
        new_cell = document.createElement('td');
        new_cell.style.backgroundColor = 'white';
        e.appendChild(new_cell);
    })

    console.log("Clicked Add Col");
}

// Remove a row
function removeR() {
    numRows = (numRows - 1 < 0) ? 0 : (numRows - 1);
    // remove the last row in the grid
    let last_row = rows[rows.length-1];
    last_row.remove();
}

// Remove a column
function removeC() {
    numCols = (numCols - 1 < 0) ? 0 : (numCols - 1);
    // for each row, remove the last cell
    
    Array.from(rows).forEach(row => {
        let cells = row.querySelectorAll('td');
        let last_cell = cells[cells.length-1];
        last_cell.remove();
    })
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    document.getElementById('color-display').style.backgroundColor = colorSelected;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    console.log('FillU selected')
    Array.from(columns).forEach(cell => {
        if((cell.style.backgroundColor.toLowerCase() == 'white')){
            cell.style.backgroundColor = colorSelected;
        }
    })
}

// Fill all cells
function fillAll(){
    Array.from(columns).forEach(cell => {
        cell.style.backgroundColor = colorSelected;
    })
    console.log('Fill All selected')
}

// Clear all cells
function clearAll(){
    console.log('Clear Selected')
    Array.from(columns).forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
}

// Event Listener for Clicking on Cells
grid.addEventListener('click', e => {
    console.log(e.target.tagName);
    if(e.target.tagName == 'TD'){
        e.target.style.backgroundColor = colorSelected;
    }
})

// open a color selection dialog
function openColorSelector(){
    // create color input element
    const colorInput = document.createElement('input');
    colorInput.type = 'color';

    // set color to input value
    colorInput.addEventListener('input', e=>{
        colorSelected = e.target.value;
        document.getElementById('color-display').style.backgroundColor = colorSelected;
    })

    colorInput.click();
}