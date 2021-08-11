class TicTacToe {
  constructor() {
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    this.currentSymbol = 'x'
    this.isWin = false
    this.winner = null
    this.isDrawResult = false
    this.isNoMoreTurns = false
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex]) {
      return
    }
    this.field[rowIndex][columnIndex] = this.currentSymbol
    this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x'
    let score = 0
    this.field.forEach((el) => {
      el.forEach((el) => {
        if (el === 'x' || el === 'o') {
          score += 1
        }
      })
    })
    if (score === 9) {
      this.isWin = true
    }
    console.log(this.currentSymbol)
  }

  isFinished() {
    return this.isWin
  }

  getWinner() {
    return this.winner
  }

  noMoreTurns() {
    return this.isNoMoreTurns
  }

  isDraw() {
    return this.isDrawResult
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex]
  }
}

let game = new TicTacToe()
module.exports = TicTacToe
