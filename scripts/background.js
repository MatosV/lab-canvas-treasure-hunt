class Background {
  constructor ($canvas, context){
    this.canvas = $canvas;
    this.context = context;

 }

  drawGrid() {
    context.beginPath();
    for (let row=0;row<=10;row++) {
      for (let col=0;col<=10;col++) {
        context.rect(row * (width/10), col * (height/10), width, height);
        context.stroke();
      }
    }
  }

}