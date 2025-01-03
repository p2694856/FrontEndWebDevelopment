menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
});

buttonSnake.addEventListener('click', ev => {

  Game1.classList.add('openGame1');
  Game1.classList.remove('closeGame1');
  Game2.classList.add('closeGame1');
  Game2.classList.remove('openGame2');


});


buttonBird.addEventListener('click', ev => {
  Game2.classList.add('openGame2');
  Game2.classList.remove('closeGame2');
  Game1.classList.add('closeGame1');
  Game1.classList.remove('openGame1');
});

buttonRestart.addEventListener('click', ev => {
  window.location.reload()
});


let laFlameAudio = new Audio("audios/laFlame.mp3");
travAni.addEventListener("click", () => {
  laFlameAudio.play();
});

const adlibsForGame1 = [
  'audios/laFlame.mp3',
  'audios/21.mp3',
  'audios/wChat.mp3',
  'audios/what.mp3'
];

function playRandomSound() {
  const randomIndex = Math.floor(Math.random() * adlibsForGame1.length);
  const selectedSound = new Audio(adlibsForGame1[randomIndex]);
  selectedSound.play();
}




// Game 1
let canvas = document.getElementById('Game1');
let context = canvas.getContext('2d');
let score = 0;

function drawScore() {
  context.font = "20px copperplate";
  context.fillStyle = "black";
  context.fillText(`Score: ${score}`, 8, 20); // Adjust the position as needed
}
// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
let grid = 16;
let count = 0;

let snake = {
  x: 160,
  y: 160,

  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,

  // keep track of all grids the snake body occupies
  cells: [],

  // length of the snake. grows when eating an apple
  maxCells: 4
};
let apple = {
  x: 320,
  y: 320
};

// get random whole numbers in a specific range

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop);

  drawScore()
  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({
    x: snake.x,
    y: snake.y
  });

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  //sets CD as an apple
  const cdimg = new Image();
  cdimg.src = 'images/CD.png';



  cdimg.onload = function() {

    const desiredWidth = grid - 1;
    const desiredHeight = grid - 1;
    context.drawImage(cdimg, apple.x, apple.y, desiredWidth, desiredHeight);
  };


  // draw snake one cell at a time
  context.fillStyle = 'black';
  snake.cells.forEach(function(cell, index) {

    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;

      playRandomSound()

      score = score + 1;

    }

    // check collision with all cells after this one
    for (let i = index + 1; i < snake.cells.length; i++) {

      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;

        score = 0;
      }
    }
  });

}

//keyboard events to move the snake
document.addEventListener('keydown', function(e) {

  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }


  e.preventDefault();
});


//Up
buttonUp.addEventListener('click', ev => {
  if (snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
});
//Down
buttonDown.addEventListener('click', ev => {
  if (snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
//Left
buttonLeft.addEventListener('click', ev => {
  if (snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
});
//Right
buttonRight.addEventListener('click', ev => {
  if (snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
});

// start the game
requestAnimationFrame(loop);

