// Declare global variables
let numRows = 3;
let numCols = 3;
let colorSelected; 

// DOM Selectors
const grid = document.getElementById('grid');
const rows = document.getElementsByTagName('tr')
const columns = document.getElementsByTagName('td')


// Add a row
function addR() {
    numRows++;
    let new_row = document.createElement('tr');
    for (let j=0;j<numCols;j++){
        let new_cell = document.createElement('td');
        new_row.appendChild(new_cell)
    }
    grid.appendChild(new_row);

    console.log("Clicked Add Row");
}

// Add a column
function addC() {
    numCols++;

    for(let i=0;i<rows.length;i++){
        new_cell = document.createElement('td');
        rows[i].appendChild(new_cell);
    }

    console.log("Clicked Add Col");
}

// Remove a row
function removeR() {
    numRows--;
    let last_row = rows[rows.length-1];
    last_row.remove();
}

// Remove a column
function removeC() {
    numCols--;
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}