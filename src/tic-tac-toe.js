class TicTacToe {
  constructor() {
    // this.field = [
    //   ['x', null, null],
    //   [null, null, null],
    //   [null, null, 'x'],
    // ]
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
      this.isNoMoreTurns = true
    }

    this.field.forEach((el, index) => {
      if (
        this.field[index][0] === this.field[index][1] &&
        this.field[index][1] === this.field[index][2] &&
        this.field[index][0] != null
      ) {
        this.winner = this.field[index][0]
        this.isWin = true
      }
      if (
        this.field[0][index] === this.field[1][index] &&
        this.field[1][index] === this.field[2][index] &&
        this.field[2][index] != null
      ) {
        this.winner = this.field[0][index]
        this.isWin = true
      }
    })
    if (
      this.field[0][0] === this.field[1][1] &&
      this.field[2][2] === this.field[1][1] &&
      this.field[0][0] != null
    ) {
      this.winner = this.field[0][0]
      this.isWin = true
    }
    if (
      this.field[0][2] === this.field[1][1] &&
      this.field[2][0] === this.field[1][1] &&
      this.field[1][1] != null
    ) {
      this.winner = this.field[1][1]
      this.isWin = true
    }

    if (this.winner === null && this.isNoMoreTurns === true) {
      this.isDrawResult = true
    }

    // console.log(this.field[0][0], this.field[0][1], this.field[0][2])
    // console.log(this.field[1][0], this.field[1][1], this.field[1][2])
    // console.log(this.field[2][0], this.field[2][1], this.field[2][2])
    // console.log(this.winner)
  }

  isFinished() {
    return this.isWin
  }

  getWinner() {
    return this.winner
  }

  isDraw() {
    return this.isDrawResult
  }

  noMoreTurns() {
    return this.isNoMoreTurns
  }
  getCurrentPlayerSymbol() {
    return this.currentSymbol
  }
  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex]
  }
}

let game = new TicTacToe()
module.exports = TicTacToe
