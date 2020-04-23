// PLAYER
  class Character {
    constructor (col, row, canvas, context) {
      this.col = col;
      this.row = row;

      this.canvas = canvas
      this.context = context

      //IMAGES OF PLAYER
        //DOWN-FONT
        this.imagePlayer = new Image();
        this.imagePlayer.src = './images/character-down.png';

        //UP-BACK
        this.imagePlayerUp = new Image();
        this.imagePlayerUp.src = './images/character-up.png';

        //LEFT
        this.imagePlayerL = new Image();
        this.imagePlayerL.src = './images/character-left.png';

        //RIGHT
        this.imagePlayerR = new Image();
        this.imagePlayerR.src = './images/character-right.png';
    }
   
   drawPlayer() {

    const height = this.canvas.height
    const width = this.canvas.width

    this.imagePlayer.addEventListener('load',()=>{
      this.context.drawImage(this.imagePlayer, this.col * width/10,this.row * height / 10,height/10 ,width/10)
    })
  }
  
  moveUp() {

    const height = this.canvas.height
    const width = this.canvas.width

    this.imagePlayerUp.addEventListener('load',()=>{
      this.context.drawImage(this.imagePlayerUp, this.col * width/10,this.row * height / 10,height/10 ,width/10)
    })
    
    /* funcao a parte

    if (event.keyCode === 38){
      this.row -=1
    } 

    if (this.row < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.row > 10){
      console.log('no grid for that side');
      this.row -= 1;   
    } else if(this.col < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.col > 10){
      console.log('no grid for that side');
      this.col -= 1;   
    }

    */
  }

  moveDown() {

    const height = this.canvas.height
    const width = this.canvas.width

    this.imagePlayerUp.addEventListener('load',()=>{
      this.context.drawImage(this.imagePlayerUp, this.col * width/10,this.row * height / 10,height/10 ,width/10)
    })
    
    /* funcao a parte 

    if (event.keyCode === 40){
      this.row -=1
    } 

    if (this.row < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.row > 10){
      console.log('no grid for that side');
      this.row -= 1;   
    } else if(this.col < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.col > 10){
      console.log('no grid for that side');
      this.col -= 1;   
    } 
    
    */ 

  }
 
  moveRight() {

    const height = this.canvas.height
    const width = this.canvas.width

    this.imagePlayerUp.addEventListener('load',()=>{
      this.context.drawImage(this.imagePlayerUp, this.col * width/10,this.row * height / 10,height/10 ,width/10)
    })

    /* funcao a parte

    if (event.keyCode === 39){
      this.row -=1
    } 

    if (this.row < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.row > 10){
      console.log('no grid for that side');
      this.row -= 1;   
    } else if(this.col < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.col > 10){
      console.log('no grid for that side');
      this.col -= 1;   
    }

    */

  }
  
  moveLeft() {

    const height = this.canvas.height
    const width = this.canvas.width

    this.imagePlayerUp.addEventListener('load',()=>{
      this.context.drawImage(this.imagePlayerUp, this.col * width/10,this.row * height / 10,height/10 ,width/10)
    })

    /* funcao a parte

    if (event.keyCode === 37){
      this.row -=1
    } 

    if (this.row < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.row > 10){
      console.log('no grid for that side');
      this.row -= 1;   
    } else if(this.col < 0){
      console.log('no grid for that side');
      this.row += 1;
    } else if(this.col > 10){
      console.log('no grid for that side');
      this.col -= 1;   
    }

    */

  }
}

// Treasure()
  class Treasure {
    constructor (col, row, canvas) {
      this.col = col;
      this.row = row;
      this.canvas = canvas
      this.context = this.canvas.getContext('2d')
      this.imageTreasure = new Image();
      this.imageTreasure.src = './images/treasure.png';
    }

    drawTreasure() {
      const height = this.canvas.height
      const width = this.canvas.width
      console.log(height, width)
      this.imageTreasure.addEventListener('load',()=>{
        this.context.drawImage(this.imageTreasure, this.col * height/10, this.row * width/10, height/10 ,width/10);      })
    }
  }

  
  
 
  