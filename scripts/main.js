
const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

const width = $canvas.width;
const height = $canvas.height;

//CREATE BG + PLAYER + TREASURE

const background = new Background($canvas, context)
const player = new Character(0,0,$canvas, context)
const treasure = new Treasure($canvas, context)

function drawEverything() {
  

  // CLEAN OLD PX
  context.clearRect(0, 0, width, height )

  // BACKGROUND
  background.drawGrid();
  
  // CHARACTER
  // (0,0) = Initial position
  player.drawPlayer();  
  
  player.moveUp();
  player.moveDown();  
  player.moveRight();    
  player.moveLeft()

  //player.limits();

  // TREASURE
  treasure.drawTreasure();
  treasure.foundIt();    
}

drawEverything();


