const container = document.querySelector('.container');

function getGridSize() {
    let isValidSize = false;
    let gridSize = prompt('What size square grid would you like?');
    while (!isValidSize) {  
        if (gridSize < 1 || gridSize > 99 || isNaN(gridSize)) {
            gridSize = prompt("Invalid entry, please select a dimension between 1 and 99:")
        } else {
            isValidSize = true;
        }
    }
    return gridSize;
}

function createGrid(width) {
    for (i = 0; i < width; i++) {
        let col = document.createElement('div');
        col.className = 'col';
        for (j = 0; j < width; j++) {
            const boxSize = 500 / width;
            let row = document.createElement('div');
            row.className = 'row';
            row.style.width = `${boxSize}px`
            row.style.height = `${boxSize}px`;
            col.appendChild(row);
            

        }
        container.appendChild(col);

        const squares = document.querySelectorAll('.row');

        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'red';
            });
        });
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let userNewGridSize = getGridSize();
    const cols = document.querySelectorAll('.col');

    cols.forEach((col) => {
        container.removeChild(col);
    });

    createGrid(userNewGridSize);
});

createGrid(getGridSize());