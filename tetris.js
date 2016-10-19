// Access the canvas.
const canvas = document.getElementById('tetris');
// Get the context.
const context = canvas.getContext('2d');
context.scale(20, 20);

// Tetris pieces (data structure).
const matrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];

function draw() {
  // Set the fill colour and fill the entire canvas.
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawMatrix(player.matrix, player.pos);
}

// Draw the 'T'.
function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) { // Loops through and only colours in the 1's.
        context.fillStyle = 'red';
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

// 
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  
  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    player.pos.y++;
    dropCounter = 0;
  }

  draw();
  requestAnimationFrame(update);
}

const player = {
  pos: {x: 5, y: 5},
  matrix: matrix,
}

update();