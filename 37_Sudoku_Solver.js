var solveSudoku = function(board) {
  var getArea = n => {
    if (n <= 2) return [0, 3]
    if (n <= 5) return [3, 6]
    return [6, 9]
  }
  var getSmallGrid = (i, j) => {
    return Array.prototype.concat.apply([], board.slice(...getArea(i)).map(item => item.slice(...getArea(j)))).filter(item => item !== '.')
  }
  var getGolumn = j => Array.prototype.concat.apply([], board.map(e => e[j]))
  let emptyCells = []
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (board[i][j] === '.') emptyCells.push([i, j])
    }
  }

  getNotInputNumber = (i, j) => {}

  let getLackNumber = arr => ['1', '2', '3', '4', '5', '6', '7', '8', '9'].filter(e => !arr.includes(e))
  let getRow = i => board[i].filter(e => e !== '.')
  let emptyCellsCounts = emptyCells.length
  while (emptyCellsCounts) {
    ;[...emptyCells].forEach(([i, j], index) => {
      let lackNumbers = getLackNumber(
        getRow(i)
          .concat(getGolumn(j))
          .concat(getSmallGrid(i, j))
      )
      console.log(lackNumbers)
      if (lackNumbers.length === 1) {
        board[i][j] = lackNumbers[0]
        emptyCells.splice(index, 1)
        emptyCellsCounts--
      }
    })
  }
  return board
}
let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])
