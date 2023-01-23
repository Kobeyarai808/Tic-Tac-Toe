// This line creates a tik-tak-toe board using an array
let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let totalMoves = 0;

// This is a function which will print out a tik-tak-toe board
function generateBoard() {
  console.log('| ' + board[0] + ' | ' + board[1] + ' | ' + board[2] + ' |');
  console.log('| ' + board[3] + ' | ' + board[4] + ' | ' + board[5] + ' |');
  console.log('| ' + board[6] + ' | ' + board[7] + ' | ' + board[8] + ' |');
  console.log('\n');
}

// This is a function which will execute a move. It takes the name of a player (i.e. X or O) and a location (0-9)
function playMove(name, location) {
  // If the location is already taken, output an error and return false showing that the move was not made.
  if (board[location] == 'X' || board[location] == 'O') {
    console.log('ERROR, the spot is already taken!');
    return false;
  } else {
    // If the location is not taken, allow the user to take the location. Return true showing that the move is done.
    board[location] = name;
    generateBoard()
    totalMoves++;
    return true;
  }
}

// This function will check and see if someone has won. The function takes a name of a player.
function checkWin(name) {
  // Checks to see if name has taken 3 spots in a row
  if (board[0]==name && board[1]==name && board[2]==name) { // Top row
    return true;
  } else if (board[3]==name && board[4]==name && board[5]==name) { // Middle row
    return true;
  } else if (board[6]==name && board[7]==name && board[8]==name) { // Bottom row
    return true;
  } else if (board[0]==name && board[3]==name && board[6]==name) { // Left column
    return true;
  } else if (board[1]==name && board[4]==name && board[7]==name) { // Middle column
    return true;
  } else if (board[2]==name && board[5]==name && board[8]==name) { // Right column
    return true;
  } else if (board[0]==name && board[4]==name && board[8]==name) { // Top-left to Bottom-right
    return true;
  } else if (board[2]==name && board[4]==name && board[6]==name) { // Top-right to Bottom-left
    return true;
  } else { // No winner was found, return false
    return false;
  }
}

// Here is some code to clear the board of inputs
for(let i=0;i<board.length;i++) board[i] = ''+(i+1);
totalMoves = 0;

//This is a call to show the user a blank tik-tak-toe board
generateBoard();

//Infinite loop
while(true) {
  let move;
  // This do-while loop will keep asking the user for a spot (1-9) and use this
  // information to call the checkWin function. If checkWin returns false, it will run again.
  // If checkWin returns true, it will move on.
  do {
    move = prompt("Please select a spot on the grid");
  } while(!playMove('O', move-1));

  // Check to see if the user won, if so, output that they won.
  if(checkWin('O')) {
    console.log('Winner winner winner! ');
    break;
  }

  // This do-while loop will get a random number between 0-9 and use that to make a move.
  // If the location is taken, find another spot.
  do {
    if(totalMoves < 9) {
      move = Math.floor(Math.random() * 9);
    } else {
      console.log("Oops, looks like a tie. Refresh the page to start again! ");
      break;
    }
  } while(!playMove('X', move));

  // This checks to see if the robot has won the tik-tak-toe game. If it won, it will
  // output that the user lost.
  if (checkWin('X')) {
    console.log('Looks like you lost... :(');
    break;
  }
}
