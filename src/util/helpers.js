export function createBoard (height, width) {
  let board = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
}

export function checkBoardForWinner () {

}

function checkMajor(board) {

}

function checkMinor(board) {

}

function checkHorizontal(board) {

}

function checkVertical(board) {

}

export function turn(board, player, col) {
  let i = 0;
  col = +col;
  while (i < board.length-1) {
    if (board[i+1][col] !== 0) {
      board[i][col] = player;
      console.log(board);
      return board;
    }
    i++;
  }
  board[i][col] = player;
  console.log(board);
  return board;
}
