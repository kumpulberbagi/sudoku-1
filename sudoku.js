"use strict"
class Sudoku {
  constructor(board_string) {
    this.board_array = board_string;
    this.board_temp = [];
  }
  solve() {
      for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
        }
      }
      // for (var x = 0; x < 9; x++) {
      //   for (var y = 0; y < 9; y++) {
      //     if (this.board_temp[x][y] == 0) {
      //       var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      //       var bool = true
      //       var z = 0;
      //
      //       // for (var z = 0; z < number.length; z++) {
      //       //   if (this.board_temp[x].indexOf(number[z]) == -1) {
      //       //     this.board_temp[x][y] = number[z]
      //       //   }
      //       // }
      //
      //       while (bool) {
      //         if (this.board_temp[x].indexOf(number[z]) == -1) {
      //           this.board_temp[x][y] = number[z];
      //           z++;
      //         } else if (y == 9) {
      //           bool = false;
      //         }
      //       }
      //
      //     }
      //   }
      // }
      // cek samping
      // for (var i = 0; i < 9; i++) {
      //   var n = 0;
      //   for (var j = 0; j < 9; j++) {
      //
      //     if (this.board_temp[i][(n + 1)] == undefined) {
      //
      //     } else if (this.board_temp[i][j - n] != this.board_temp[i][(n + 1)]) {
      //       console.log(this.board_temp[i][j - n] + " | " + this.board_temp[i][(n + 1)] + " masih benar");
      //       n++;
      //     } else {
      //       return "row ke " + (i + 1) + " salah";
      //     }
      //
      //   }
      // }
      // cek bawah
      // for (var i = 0; i < 9; i++) {
      //   var n = 0;
      //   for (var j = 0; j < 9; j++) {
      //
      //     if (this.board_temp[(n + 1)][j] == undefined) {
      //
      //     } else if (this.board_temp[j - n][i] != this.board_temp[(n + 1)][j]) {
      //       console.log(this.board_temp[j - n][i] + " | " + this.board_temp[(n + 1)][j] + " masih benar");
      //       n++;
      //     } else {
      //       return "row ke " + (j + 1) + " salah";
      //     }
      //
      //   }
      // }
      //return this.board_temp;
    } //end solve
  // cek horisontal
  cek(x, y) {
    var currentX = x;
  }
  // cek kanan
  //console.log(game.cekRow(0, 3);
  cekRow(row, col) {
    var num = this.board_temp[row][col]
    var status = "tidak ada"
    for (var i = 0; i < 9; i++) {
      //saya akan skip apabila i sama dengan col
      if (i != col) {
        if (this.board_temp[row][i] == num) {
          status = "ada"
          return status;
        }
      }
    }
    return status;
  }
  //cekCol
  cekCol(row, col) {
    var num = this.board_temp[row][col]
    var status = "tidak ada"
    for (var i = 0; i < 9; i++) {
      if (i != row) {
        if (this.board_temp[i][col] == num) {
          status = "ada"
          return status;
        }
      }
    }
    return status;
  }
  // cekKanan(x, y) {
  //   var n = 0;
  //   for (y; y < (this.board_temp[x].length); y++) {
  //
  //     if (this.board_temp[x][y + (n + 1)] == undefined) {
  //       return true;
  //     } else if (this.board_temp[x][y - n] !== this.board_temp[x][y + (n + 1)]) {
  //       console.log(this.board_temp[x][y - n] + " | " + this.board_temp[x][y + 1] + " aman");
  //       n++
  //     } else {
  //       return false;
  //     }
  //
  //   }
  // }
  // cek bawah
  // cekBawah(x, y) {
  //     var n = 0;
  //     for (x; x < (this.board_temp[y].length); x++) {
  //
  //       if (this.board_temp[x + (n + 1][y] == undefined) {
  //           return true;
  //         } else if (this.board_temp[x - n][y] !== this.board_temp[x + (n + 1)][y]) {
  //           console.log(this.board_temp[x - n][y] + " | " + this.board_temp[x + 1][y] + " aman");
  //           n++
  //         } else {
  //           return false;
  //         }
  //
  //       }
  //     }
  // Returns a string representing the current state of the board
  board() {
    for (var i = 0; i < 9; i++) {
      this.board_temp[i] = [];
      for (var j = 0; j < 9; j++) {
        this.board_temp[i][j] = this.board_array[(9 * i) + j];
      }
    }
    return this.board_temp;
  }
} // end class
// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var tampungSemua = [];
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt').toString().split("\n")[0]
board_string = board_string.split("")
//console.log(satuanArray);
var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"
// game.solve()
console.log(game.board());
console.log("====================================");
//console.log(game.board_temp[0].length - 3);
// console.log(game.cekKanan(0, 3))
//console.log(game.cekBawah(3, 2))
console.log(game.cekRow(0, 3));
console.log(game.cekCol(3, 2));
