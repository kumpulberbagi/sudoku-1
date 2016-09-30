// "use strict"
// The file has newlines at the end of each line,
// so we call split to remove it (\n)
// var choices = ["1","2","3","4","5","6","7","8","9"]
// var random = Math.round(Math.random()*8+1);
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]
var baris = []
//return row
function row (board_string){
  var array = board(board_string)
  for (var i = 0; i < array.length; i++) {
     baris.push(array[i])
 }
 return baris
}
var col = [[],[],[],[],[],[],[],[],[]]
row(board_string)
console.log(baris);
//console.log(column(board_string));
//return kolom
function column(board_string){
  var array = board(board_string)

  for (var j = 0; j<array.length; j++) {
    for (var i = 0; i < array.length; i++) {
       col[j].push(array[i][j])
   }
  }
 return col
}
//return square

function square (){
  var box1 = []
  var box2 = []
  var box3 = []
  var box4 = []
  var box5 = []
  var box6 = []
  var box7 = []
  var box8 = []
  var box9 = []
  var square = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
  for (var i = 0; i <= 2; i++) {
      box1.push(board(board_string)[i][0])
      box1.push(board(board_string)[i][1])
      box1.push(board(board_string)[i][2])
      box2.push(board(board_string)[i][3])
      box2.push(board(board_string)[i][4])
      box2.push(board(board_string)[i][5])
      box3.push(board(board_string)[i][6])
      box3.push(board(board_string)[i][7])
      box3.push(board(board_string)[i][8])
  }
  for (var i = 3; i <= 5; i++) {
      box4.push(board(board_string)[i][0])
      box4.push(board(board_string)[i][1])
      box4.push(board(board_string)[i][2])
      box5.push(board(board_string)[i][3])
      box5.push(board(board_string)[i][4])
      box5.push(board(board_string)[i][5])
      box6.push(board(board_string)[i][6])
      box6.push(board(board_string)[i][7])
      box6.push(board(board_string)[i][8])
  }
  for (var i = 6; i <= 8; i++) {
      box7.push(board(board_string)[i][0])
      box7.push(board(board_string)[i][1])
      box7.push(board(board_string)[i][2])
      box8.push(board(board_string)[i][3])
      box8.push(board(board_string)[i][4])
      box8.push(board(board_string)[i][5])
      box9.push(board(board_string)[i][6])
      box9.push(board(board_string)[i][7])
      box9.push(board(board_string)[i][8])
    }
 return square
  }
//function print board
function board(){
  var data = board_string.split('')
  var array = []
  var i = 0;
  var j= 0;
  var k =0
  //print table
  while (i<Math.floor(data.length/9)) {
    array.push([])
    i+=1
  }
  //print board
  while (j<data.length) {
    array[k].push(data[j])
    j+=1
    if (j%9===0) {
      k+=1
    }
  }
  return array
}
//function reset array

function reset(board_string) {
return board(board_string)
}

// function num (x){
// var check = ["1","2","3","4","5","6","7","8","9"];
// for (var i = 0; i < check.length; i++) {
//   if(check.includes(board(x,)))
// }
// }

//function result
function hasil(){
    //random
    var array = board()
    console.log(array);
    var result = []
    console.log(result);
    //break recur
    if (!array[1].includes("0") && !array[2].includes("0") && !array[3].includes("0") && !array[4].includes("0") && !array[5].includes("0") && !array[6].includes("0") && !array[7].includes("0") && !array[8].includes("0")) {
      //console.log("test");
    for (var i = 0; i < array.length; i++) {
      result.push(array[i])
    }
    return result
    }
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j <array.length; j++) {
        if (array [i][j]=== "0") {
          console.log("asu");
            check[i]
            if(!row(board_string)[i].includes(k) && !square()[i].includes(k) && !column(board_string)[i].includes(k)) {
              array[i][j]= k
              //console.log(num)
            }
            //console.log(array[i][j]);.
        }return hasil(board_string)
          //
        }
      }
    }

//
var choices = ["1","2","3","4","5","6","7","8","9"]
function getNum(random) {
var random = Math.floor(Math.random()*choices.length);
  if(choices.length == 1) {
    return null;
  }
  for (var i = 0; i < 9; i++) {
    if (!column(board_string)[i].includes(random)&&!row(board_string)[i].includes(random)&&!square()[i].includes(random)) {
      return random
    } else {
      var random = choices [Math.floor(Math.random()*choices.length)];
      var index = choices.indexOf(random)
      choices.splice(index,1)
      // arr choices nya, di pop yang angka nya random
      getNum(random)
    }
  }
}
//console.log(square()[1]);
//console.log(hasil(board_string));
//console.log(board(board_string));
//check in every colum and row for 0
//function  print
// var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"
// game.solve()
//console.log(game.board());
console.log("------sudoku------");
