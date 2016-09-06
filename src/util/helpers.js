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

export function checkBoardForWinner (board) {
  for (let col = 0; col < board[0].length; col++) {
    let won = checkVertical(board, col);
    if (won) {
      console.log('winner', won);
    }
  }
}

function checkMajor(board) {

}

function checkMinor(board) {

}

function checkHorizontal(board) {

}

function checkVertical(board, col) {
  let count = 1;
  let i = board.length - 1;
  let curr = board[i][col];
  i--;
  while (i >= 0 && curr !== 0) {
    // console.log('current is', curr, 'count:', count);
    if (curr === board[i][col]) {
      count++;
      i--;
      if (count === 4) {
        console.log('found winner:', curr);
        return {winner: curr}
      }
    } else {
      count = 1;
      curr = board[i][col];
      // console.log('not a match new curr', curr);
      // console.log(curr !== 0);
      i--;
    }
  }
  // console.log('done with col', col);
  return false;
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
