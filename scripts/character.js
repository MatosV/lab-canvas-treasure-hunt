// PLAYER
  class Character {
    constructor (col, row, $canvas, context) {
      this.col = col;
      this.row = row;

      this.canvas = $canvas
      this.context = context

      this.playerImage = new Image();
      this.playerImage.src = "./../images/character-down.png"

    }
   
   drawPlayer() {

    const height = this.canvas.height
    const width = this.canvas.width

    this.playerImage.addEventListener('load',()=>{
      this.context.drawImage(
        this.playerImage, 
        this.col * width/10,
          this.row * height / 10,
          height/10 ,
          width/10
      );
    });

    this.context.drawImage(
      this.playerImage, 
      this.col * width/10,
        this.row * height / 10,
        height/10 ,
        width/10
    );
  }
  
  moveUp() {
    this.row-=1; 
  }
    
  moveDown() {
    this.row+=1; 
 }

  moveRight() {
    this.col+=1;
  }  

  moveLeft() {
    this.col-=1;
  }
}





  

  
  
 
  