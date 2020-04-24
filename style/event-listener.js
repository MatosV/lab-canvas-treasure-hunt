window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      break;
    case 38:
      console.log('up');
      break;
    case 39:
      console.log('right');
      break;
    case 40:
      console.log('down');
      break;
  }
});

/*

playerMovement.addEventListener('keydown', (event) => {
  for (let i=0; i<event.length; i++){
    if(event[i] === 37 || event[i] === 38 || event[i] === 39 || event [i] === 40)
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    // React based on the key pressed
    switch (event[i]) {
      //left
      case 37:
        player.moveLeft();
        console.log('left');
        break;
        //up
      case 38:
        player.moveUp();
        console.log('up');
        break;
        //rigth
      case 39:
        player.moveRight();
        console.log('right');
        break;
        //down
      case 40:
        player.moveDown();
        console.log('down');
        break;

        // Clear canvas and paint everything again

        drawEverything();
    }
  }
});

*/
