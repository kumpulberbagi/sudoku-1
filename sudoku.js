"use strict"

var board=[], array=[], angka=0

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
  }

  solve() {

    var string = this.board_string

    if(this.cekBaris() == false) {
      return "tidak bisa di solve"
    }

    else if(this.cekKolom() == false) {
      return "idak bisa di solve"
    }
    else {
      return board
    }

    this.inputAngka()

    // return board

  }

  cekBaris() {
    for(var l =1;l<=9;l++) {

      for(var i=0;i<9;i++) {
        var flag=0
        // console.log(board[i][j]);
        for(var j=0;j<9;j++) {
          // console.log("atas: "+l);
          // console.log("bawah: "+board[i][j]);
          if(flag>1) {
            // console.log("keluar");
            return false;
          }
          if(l == board[i][j]) {
            flag++
            // console.log(flag);
          }

        }

      }
    }
  }

  cekKolom() {
    for(var l =1;l<=9;l++) {

      for(var i=0;i<9;i++) {
        var flag=0
        // console.log(board[i][j]);
        for(var j=0;j<9;j++) {
          // console.log("atas: "+l);
          // console.log("bawah: "+board[j][i]);
          if(flag>1) {
            // console.log("keluar");
            return false;
          }
          if(l == board[j][i]) {
            flag++
            // console.log(flag);
          }

        }

      }
    }
  }

  // cekKotakSatu() {
  //   for(var l =1;l<=9;l++) {
  //
  //     for(var i=0;i<2;i++) {
  //       var flag=0
  //       // console.log(board[i][j]);
  //       for(var j=0;j<2;j++) {
  //         // console.log("atas: "+l);
  //         // console.log("bawah: "+board[j][i]);
  //         if(flag>1) {
  //           // console.log("keluar");
  //           return false;
  //         }
  //         if(l == board[j][i]) {
  //           flag++
  //           // console.log(flag);
  //         }
  //
  //       }
  //
  //     }
  //   }
  // }

  inputAngka() {

    for(var i=0;i<1;i++) {

      for(var j=0;j<9;j++) {

        if(board[i][j] == 0) {

          if(this.cekPerBaris(i) == true) {
            board[i][j] = "a"
          }

        }

      }

    }
    return board
  }

  cekPerBaris(index) {
    for(var l =1;l<=9;l++) {

      for(var i=index;i<index+1;i++) {
        var flag=0

        for(var j=0;j<9;j++) {

          if(l!=board[i][j]) {
            angka = j
            return true;
          }
          if(l == board[i][j]) {
            flag++
            // console.log(flag);
          }

        }

      }
    }

    return false
  }




  // Returns a string representing the current state of the board
  board() {

    var string = this.board_string

    // console.log(string);

    for(var i =0;i<9;i++) {
      board[i] = []
      for(var j=0;j<9;j++) {
        board[i][j] = string[j + 9*i]
      }
    }

    return board

    // for(var i=0;i<9;i++) {
    //   board.push(array.slice(i, i+9))
    // }
    // return board
  }





}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

game.board();
// console.log(board[0][0]);
// console.log(game.board());
// Remember: this will just fill out what it can and not "guess"
// game.solve()
// console.log(game.input());
// console.log(game.solve());
console.log(game.inputAngka());

// game.solve()

// console.log(game.board())
