
const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

const width = $canvas.width;
const height = $canvas.height;

//EL GRID
//create treasure and player

const player = new Character(0,0,$canvas, context)
const treasure = new Treasure(2,7,$canvas)

function drawGrid() {
  context.beginPath();
  for (row=0;row<=10;row++) {
    for (col=0;col<=10;col++) {
      context.rect(row * (width/10), col * (height/10), width, height);
      context.stroke();
    }
  }
}

function drawEverything() {

  drawGrid();
  
  // (0,0) = Initial position

  player.drawPlayer(); 

  // Increase by 1 the value of player.row
  player.moveUp(); 

  // Increase by 1 the value of player.col
  player.moveDown();

  player.moveRight();
  
  player.moveLeft(); 

  // => 1,2
  treasure.drawTreasure();

}

drawEverything();
