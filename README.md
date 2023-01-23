# Tic-Tac-Toe

## Description
I am sure all of you know how to play tic tac toe! If not, talk to a mentor and we will teach you. It is a very simple game. In this project, you will be building a Tic Tac Toe game where you can play against the computer. You and the computer can take turns in marking the game board until a winner wins. If no one wins at the end, you can play again. 

## Difficulty
Advanced/Extremely Advanced

## Prerequisites
- JS Variables, Conditionals (If/else/else-if)
- JS Loops (Do-While)
- JS Arrays
- JS Functions

## Make note
For this project, save your work frequently, to see the game you must open up a console. A console is where computers tell coders what is happening, coders use a console because it does not require extra code to show what is happening. To open the console, right click your mouse and press "inspect", then select the button that says "console" in the window that appears. If you would like more information on what a console is, ask a mentor. 

## Setting Up
- To start, please create a folder
- Inside of the folder, create a file called "index.html" and another file called "main.js"
- Inside the index.html all we will do is put a doctype and a script tag in the file. 
  - Please type "<!doctype html>" on the first line. This is to let computers know that this is an HTML file. Usually we would put more code here but for this project we will not need to. 
  - Please type "<script src="./main.js"></script>" on the second line. This tells the computer that we will be putting our Javascript code in a file called "main.js". This also says that the javascript file is located in the same folder as index.html. 

## Coding the Javascript portion
Now that we are set up, we can start coding the Javascript code. Lots of this code will seem very difficult and you may not understand what it means. If you would like more information on any portion of this project, please ask a mentor. 

### Step 1: Creating the board and Creating Move counter
In order to hold information for the tic tac toe game, we will need to create a board. We can create a board in many ways but the simplest is to use an array. 

- Create an array with 9 elements with string values "1" through "9"
  - For the first slot it should say "1", "2" for the second slot, "3" for the third slot, "4" for the second slot, and so on and so forth. The reason we are labeling the spots in the array is so the user knows what slot corresponds to what part of the board. 
- Create a variable called totalMoves and assign it the value 0. 

### Step 2: Creating the generateBoard function
In this game, we will need to update the board frequently. In fact, we will need to update the board after every move is made. Each time the board gets updated, we will want to generate a new board so the user knows what the newest version of the board looks like. If we want to run code many times, the best way to do so is to use a function. 

- Create a function that will show the board to the console. 
- There are many ways to do so but one way is shown below
  - `console.log("| " + board[0] + " | " + board[1] + " | " + board[2] + " |");`<br/>`console.log("| " + board[3] + " | " + board[4] + " | " + board[5] + " |");`<br/>`console.log("| " + board[6] + " | " + board[7] + " | " + board[8] + " |");`<br/>`console.log("\n");`

### Step 3: Creating the playMove function
The playMove function is a function that will be called every time someone (either player or the computer) makes a move on the board. The function takes 2 parameters. The first parameter name will either be an "X" or an "O" corresponding to the player or computer. The second parameter is an integer corresponding to the location on the board the user wants to place their mark. 

- Create a function that takes 2 parameters (name and location)
- Inside the function you want to check and see if the desired location is taken. You can do this by checking if an "X" or an "O" exists in that location already. 
  - If the spot is already taken, output to the console that the spot is already taken
  - After outputting to the console, you want to return false. This will tell whatever called the function that the spot was already taken. 
- If the spot is not taken, you will want to allow the person to put their name on that particular spot on the board
  - To do so, put the name variable in that spot on the board. 
  - Next, you want to increment the totalMoves counter. To do this add 1 to the totalMoves counter. We will use this variable somewhere else. 
  - Finally, call your generateBoard function so that the user can see the new board after the move is made. 
  - To end the function, return true to indicate that the move was successfully made. 

### Step 4: Creating the checkWin function

### Step 5: Pre-run cleanup code

### Step 6: Runtime Code
