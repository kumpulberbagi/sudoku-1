"use strict"
// The file has newlines at the end of each line,
// so we call split to remove it (\n)

var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]





class Sudoku {
  constructor(board_string) {
      this.board_string = board_string;
  }

  solve() {
    var array = this.board()
      var solution = "123456789"
       var find = solution.split("").map(function(array){
         console.log(array);
         for (var i = 0; i < array.length; i++) {
          for (var j = 0; j < array.length; j++) {
             console.log(array[i].indexOf("0"));
           }
         }
       }
   );
  }
  row (){
var check = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var answer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var array = this.board()
 var row = [row1, row2, row3, row4, row5,row6,row7,row8,row9]
 var row1 = []
 var row2 = []
 var row3 = []
 var row4 = []
 var row5 = []
 var row6 = []
 var row7 = []
 var row8 = []
 var row9 = []

 var box1 = []
 var box2 = []
 var box3 = []
 var box4 = []
 var box5 = []
 var box6 = []
 var box7 = []
 var box8 = []
 var box9 = []
 for (var i = 0; i < array.length; i++) {
     row1.push(array[j][i])
     row2.push(array[1][i])
     row3.push(this._sudoku[2][i])
     row4.push(this._sudoku[3][i])
     row5.push(this._sudoku[4][i])
     row6.push(this._sudoku[5][i])
     row7.push(this._sudoku[6][i])
     row8.push(this._sudoku[7][i])
     row9.push(this._sudoku[8][i])
     col1.push(this._sudoku[i][0])
     col2.push(this._sudoku[i][1])
     col3.push(this._sudoku[i][2])
     col4.push(this._sudoku[i][3])
     col5.push(this._sudoku[i][4])
     col6.push(this._sudoku[i][5])
     col7.push(this._sudoku[i][6])
     col8.push(this._sudoku[i][7])
     col9.push(this._sudoku[i][8])

 }
 for (var i = 0; i <= 2; i++) {
     box1.push(this._sudoku[i][0])
     box1.push(this._sudoku[i][1])
     box1.push(this._sudoku[i][2])
     box2.push(this._sudoku[i][3])
     box2.push(this._sudoku[i][4])
     box2.push(this._sudoku[i][5])
     box3.push(this._sudoku[i][6])
     box3.push(this._sudoku[i][7])
     box3.push(this._sudoku[i][8])
 }
 for (var i = 3; i <= 5; i++) {
     box4.push(this._sudoku[i][0])
     box4.push(this._sudoku[i][1])
     box4.push(this._sudoku[i][2])
     box5.push(this._sudoku[i][3])
     box5.push(this._sudoku[i][4])
     box5.push(this._sudoku[i][5])
     box6.push(this._sudoku[i][6])
     box6.push(this._sudoku[i][7])
     box6.push(this._sudoku[i][8])
 }
 for (var i = 6; i <= 8; i++) {
     box7.push(this._sudoku[i][0])
     box7.push(this._sudoku[i][1])
     box7.push(this._sudoku[i][2])
     box8.push(this._sudoku[i][3])
     box8.push(this._sudoku[i][4])
     box8.push(this._sudoku[i][5])
     box9.push(this._sudoku[i][6])
     box9.push(this._sudoku[i][7])
     box9.push(this._sudoku[i][8])
   }
  }
  column(){
    var array = this.board()
    var col1 = []
    var col2 = []
    var col3 = []
    var col4 = []
    var col5 = []
    var col6 = []
    var col7 = []
    var col8 = []
    var col9 = []
  }

  check(array){
    //random
    var random = Math.round(Math.random()*8+1);
    var col =
    var row =
    var square =
    var array = this.board()
    var result = []
    //break recur
    if (!array[1].includes("0") && !array[2].includes("0") && !array[3].includes("0") && !array[4].includes("0") && !array[5].includes("0") && !array[6].includes("0") && !array[7].includes("0") && !array[8].includes("0")) {
    for (var i = 0; i < array.length; i++) {
      result.push(array[i])
    }
    return result
    }
    //check in every colum and row for 0
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j <array.length; j++) {
        if (array [i][j]=== 0) {
          var num = getNum(random)
          if(num) {
            //replace
          } else {
            // reset board
          }
            // array[i][j] = random.toString();
            // if (!col[i].includes(random)&&!row[i].includes(random)&&!square[i].includes(random)) {
            //    array[i][j] = random
            // }else {
            //   array[i][j] = Math.floor(Math.random()*random).toString();
            //   return this.check(array)
            // }
        }
      }
    }
  }

  reset() {
    this.board_string = board_string;
  }

  // Returns a string representing the current state of the board
  board() {
    var string = this.board_string.split('')
    var array = []
    var i = 0;
    var j= 0;
    var k =0
    //print table
    while (i<Math.floor(string.length/9)) {
      array.push([])
      i+=1
    }
    //print board
    while (j<string.length) {
      array[k].push(string[j])
      j+=1
      if (j%9===0) {
        k+=1
      }
    }
    return array
  }

  printBoard(){
    var print = this.board()
    var array = []
     var k = 0;
     var l = 0;
    for (var i = 0; i < print.length; i++) {
      array.push([])
      l+=1
       for (var j = 0; j < print[i].length; j++) {
         k+=1
         array[i].push(print[i][j])
         if (k===3) {
           array[i].push("|")
           k=0
         }
      }

    }
    return array
  }

  printSudoku(){
    //console.log("aji");
    for (var i = 0; i < this.printBoard().length; i++) {

      console.log(this.printBoard()[i].join(' '))
    }
  }

}


function getNum(random, choices) {
  var choices = ["1","2","3","4","5","6","7","8","9"]
  if(!choices) {
    return null;
  }
  for (var i = 0; i < 9; i++) {
    if (!col[i].includes(random)&&!row[i].includes(random)&&!square[i].includes(random)) {
      return random
    } else {
      var random = Math.floor(Math.random()*choices.length);
      var index = choices.indexOf(random.toString());
      choices.splice(index,1)
      // arr choices nya, di pop yang angka nya random
      getNum(random)
    }
  }
}

var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"
game.solve()
//console.log(game.board());
console.log("------sudoku------");
//game.printSudoku();
