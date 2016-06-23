var board = [null, null, null, null, null, null, null, null, null];

function legalMove (space) {
  return board[space] == null;
}

function makeMove (space, piece) {
  return board[space] = piece;
}

export {legalMove, makeMove};

