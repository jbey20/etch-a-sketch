
function createGrid () {
  const container = document.querySelector('#container');
  console.log(container)
  const grid = document.createElement('div');
  grid.classList.add('grid');
  grid.setAttribute('id', 'grid');
  console.log(grid);
  container.appendChild(grid);
  return grid;
}

function fillGrid (grid, boxes) {
  grid.setAttribute('style',
                    `width: 80vw;
                    height: 80vw;
                    display: grid;
                    grid-template-columns: repeat(${boxes}, auto [col-start]);
                    grid-template-rows: repeat(${boxes}, auto [row-start]);
                    background-color: lightgray`
  )
  for (i=0; i<(boxes*boxes); i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
  }
}

function etch(e) {
  e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function addEvents() {
  document.querySelectorAll('.grid > div').forEach(item => {
    item.addEventListener('mouseover', etch)
    }
  );
}

function resetGrid() {
  document.querySelector('#btn').addEventListener('click', e => {
    let boxes = prompt("Please enter a number of boxes per side for your grid(100 or fewer).")
    while (boxes > 100 | boxes < 0) {
      boxes = prompt("Please enter a valid number of boxes (100 or fewer).");
    };
    while (grid.lastElementChild) {
      grid.removeChild(grid.lastElementChild);
    };
    fillGrid(grid,boxes);
    addEvents();
  })
} 

let grid = createGrid();
let x = 16;
fillGrid(grid, x);
addEvents();
resetGrid();

