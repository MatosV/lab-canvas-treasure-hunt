class Treasure {
  constructor ($canvas, context) {
    this.canvas = $canvas;
    this.context = context;

    this.col = 0;
    this.row = 0; 
    
    this.randomTreasurePosition();

    this.imageTreasure = new Image();
    this.imageTreasure.src = './images/treasure.png';    
  }

  randomTreasurePosition() {
    const randomCol = Math.floor(Math.random() * 10)
    const randomRow = Math.floor(Math.random() * 10)
  
    this.col = randomCol;
    this.row = randomRow;
  }

  drawTreasure() {
    const height = this.canvas.height
    const width = this.canvas.width      

    this.imageTreasure.addEventListener('load',()=>{
      this.context.drawImage(this.imageTreasure, 
        this.col * height/10, 
        this.row * width/10, 
        height/10 ,
        width/10);       
    })  
    this.context.drawImage(this.imageTreasure, 
      this.col * height/10, 
      this.row * width/10, 
      height/10 ,
      width/10);    
  }

  foundIt() {
    if(player.col === treasure.col && player.row === treasure.row) {
      console.log("Work like a captain, play like a pirate...")
    }
  }

}
