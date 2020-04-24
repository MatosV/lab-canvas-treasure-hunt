window.addEventListener('keydown', (event) => {
  event.preventDefault();
    // React based on the key pressed
    switch (event.keyCode) {
      //left
      case 37:
        player.moveLeft();
        drawEverything();
        break;
        //up
      case 38:
        player.moveUp();
        drawEverything();
        break;
        //rigth
      case 39:
        player.moveRight();
        drawEverything();
        break;
        //down
      case 40:
        player.moveDown();
        drawEverything();
        break;
    }
});

