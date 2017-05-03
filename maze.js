var board = [
 //col 0     col 1   col 2   col 3   col 4   col 5   col 6   col 7   col 8   col 9   col 10  col 11  col 12  col 13  col 14  col 15  col 16  col 17
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 0
  ['eSign1', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'eSign2'],//row 1
  ['wall',   'path', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'path', 'wall' ],//row 2
  ['wall',   'path', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall' ],//row 3
  ['wall',   'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall' ],//row 4
  ['wall',   'wall', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall' ],//row 5
  ['pizza', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path' ],//row 6
  ['wall',   'wall', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'wall', 'wall' ],//row 7
  ['wall',   'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall' ],//row 8
  ['wall',   'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'wall' ],//row 9
  ['wall',   'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall' ],//row 10
  ['eSign3', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'eSign4'],//row 11
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 12
  ['spac',   'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac' ],//row 13
  ['spac',   'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac' ],//row 14
  ['spac',   'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac' ],//row 15
  ['spac',   'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac' ],//row 16
  ['spac',   'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac', 'spac' ] //row 17
];


function renderBoard () {
  $('#board').empty();
  board.forEach(function (row) {
    row.forEach(function (grid) {
      var gridClass;
      if (grid === 'wall') {
        gridClass = 'wall';
      } else if (grid === 'path') {
        gridClass = 'path';
      } else if (grid === 'pizza') {
        gridClass = 'pizza';
      } else if (grid === 'eSign1') {
        gridClass = 'eSign1';
      } else if (grid === 'eSign2') {
        gridClass = 'eSign2';
      } else if (grid === 'eSign3') {
        gridClass = 'eSign3';
      } else if (grid === 'eSign4') {
        gridClass = 'eSign4';
      } else if (grid === 'nizar') {
        gridClass = 'nizar';
      }

      var html = '<div class="square ' + gridClass + '"></div>';
      $('#board').append(html);
    });
  });
}

//function that will at start assign random winning door


//find pizza and return his position
var rowA;
var colA;

function findPizza() {
board.forEach(function (row, rowIndex) {
  row.forEach(function (col, colIndex) {
    if(col === 'pizza') {
      rowA = rowIndex;
      colA = colIndex;
    }
  });
  });
return rowA, colA;
}


//find nizar and return his position
var rowB;
var colB;

function findNizar() {
board.forEach(function (row, rowIndex) {
  row.forEach(function (col, colIndex) {
    if(col === 'nizar') {
      rowB = rowIndex;
      colB = colIndex;
    }
  });
});
  return rowB, colB;
}

function pizzaLose() {
    findPizza();
    findNizar();
    if(((rowB - 1 === rowA) && (colB === colA)) || ((rowB + 1 === rowA) && (colB === colA)) ||
    ((rowB === rowA) && (colB - 1 === colA)) || ((rowB === rowA) && (colB + 1 === colA))) {

      $('#board').empty();
      $('#pic').append('<img src="https://media.giphy.com/media/ZUiVM7qj7X3A4/giphy.gif">');

  }return;
}

// move nizar based on random number generator
// 0 - 3

function moveNizar() {
  findNizar();

//if Nizar isn't on board yet, exit function.
  if (rowB === undefined || colB === undefined) {
      return;
}

//test directions and push available ones to array
var testDirections = [];
if (board[rowB][colB - 1]   === 'path') {
  testDirections.push('left');
}
if (board[rowB][colB + 1] === 'path') {
  testDirections.push('right');
}
if (board[rowB - 1][colB] === 'path') {
  testDirections.push('up');
}
if (board[rowB + 1][colB] === 'path') {
  testDirections.push('down');
}
console.log("test directions: " + testDirections);


//store that array in availDirections then randomly pick one
var randomN =  Math.floor(Math.random() * testDirections.length);
var chooseDirection = testDirections[randomN];
console.log("chosen direction is " + chooseDirection);


switch(chooseDirection) {
  case 'up':
    moveUp(rowB, colB, 'nizar');
    break;
  case 'down':
    moveDown(rowB, colB, 'nizar');
    break;
  case 'left':
    moveLeft(rowB, colB, 'nizar');
    break;
  case 'right':
    moveRight(rowB, colB, 'nizar');
    break;
}
return;
}

//also tests for collision with wall and update position depending on results
function moveLeft(row, col, character) {
  if
    (board[row][col - 1] === 'path') {
    board[row][col - 1] = character;
    board[row][col] = 'path';
  } else if
    (character === 'pizza' && board[row][col - 1] === 'eSign1') {
      //Stee broke this
      board[1][1] = "path";
      board[5][8] = character;
      board[1].splice(1, 1, "nizar");
  } else {
    return;
  }
  renderBoard();
}


function moveRight(row, col, character) {

  if(board[row][col + 1] === 'path') {
    board[row][col + 1] = character;
    board[row][col] = 'path';
  } else {
    return;
  }
  renderBoard();
}

function transposeMatrix () {
  for (var row = 0; row < board.length; row++) {
    for (var column = row+1; column < board.length; column++) {
      var temp = board[row][column];
      board[row][column] = board[column][row];
      board[column][row] = temp;
    }
  }
}

function moveUp (row, col, character) {
  transposeMatrix();
  moveLeft(col, row, character);
  transposeMatrix();
  renderBoard();
}

function moveDown (row, col, character) {
  transposeMatrix();
  moveRight(col, row, character);
  transposeMatrix();
  renderBoard();
}


$(document).keydown(function(ev) {
    var acceptableKeys = [37, 38, 39, 40];
    if (!acceptableKeys.includes(ev.keyCode)) {
      return;
    }

   var keyDir = ev.keyCode;
    ev.preventDefault();
    letsWin(keyDir);
    findPizza();
    moveNizar();

    switch(ev.keyCode) {
      case 38:
        moveUp(rowA, colA, 'pizza');
        break;
      case 40:
        moveDown(rowA, colA, 'pizza');
        break;
      case 37:
        moveLeft(rowA, colA, 'pizza');
        break;
      case 39:
        moveRight(rowA, colA, 'pizza');
        break;
    }
    pizzaLose();
    letsWin(ev.keyCode);
  });
renderBoard();
