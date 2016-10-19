// "use strict"
// require('console.table');
//
// class Sudoku {
//   constructor(board_string) {
//     this._board_string = board_string;
//     this._result = [];
//   }
//
//   solve() {}
//
//   // Returns a string representing the current state of the board
//   board() {
//     var into_nine = this._board_string.match(/.{1,9}/g);
//     for (var i = 0; i < 9; i +=1) {
//       this._result[i] = into_nine[i].split("").map(Number);
//     }
//     return this._result;
//   }
// }
//
// // The file has newlines at the end of each line,
// // so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-02_project-euler_50-easy-puzzles.txt')
//   .toString()
//   .split("\n")[0]
//
// var game = new Sudoku(board_string)
//
// // Remember: this will just fill out what it can and not "guess"
// //game.solve()
// var prob_one = "003020600900305001001806400008102900700000008006708200002609500800203009005010300";
//
// console.table(game.board())
//
//


require('console.table');
var math = require('mathjs');

var prob_one = "003020600900305001001806400008102900700000008006708200002609500800203009005010300";
var prob_two = "005030081902850060600004050007402830349760005008300490150087002090000600026049503";
var permutation = sum_array(array_num());


// Translate the given string into sudoku array that has 9 x 9 dimension
function string_to_array(str) {
  var into_nine = str.match(/.{1,9}/g);
  var result = [];
  for (var i = 0; i < 9; i +=1) {
    result[i] = into_nine[i].split("").map(Number);
    //console.log("--", result);
  }
  return result;
}

// Providing us a number from 0 to 9
function array_num() {
  var result = [];
  for (var i = 1; i <= 9; i += 1) {
    result.push(i)
  }
  return result.map(Number);
}

// permutation of number from 1 to 9
function sum_array(array) {
  return array.reduce((prev, next) => prev + next);
}

// unit
function vertical(set_array) {
  var result = [];
  for (var i = 0; i < set_array.length; i += 1) {
    result[i] = [];
    for (var j = 0; j <set_array.length; j += 1){
      result[i][j] = set_array[j][i];
    }
  }
  return result;
}

function small_region(array) {
  var result = [];
  for(var i = 0; i < array.length; i += 3) {
    var temporary = array.slice(i, i + 3);
    result.push(temporary)
  }
  return result;
}

function big_region(array) {
  var result = []
  for(var i = 0; i < array.length; i += 1) {
    result[i] = small_region(array[i])
  }
  return result;
}



function pr(para) {
  console.log(para);
}

function block1(big_region) {
  var result = [];
  for (var l = 0; l <1; l +=1){ //test 1
  result[l] = []
      for (var j = 0; j < 3; j += 1) {
        for (var k = 0; k < 3; k += 1){
          result.push(big_region[j][k])
          }
      }
    }
    return result;
  }
  function block2(big_region) {
    var result = [];
    for (var l = 0; l <1; l +=1){ //test 1
    result[l] = []
        for (var j = 0; j < 3; j += 1) {
          for (var k = 0; k < 3; k += 1){
            result.push(big_region[j+3][k])
            }
        }
      }
      return result;
    }
    function block3(big_region) {
      var result = [];
      for (var l = 0; l <1; l +=1){ //test 1
      result[l] = []
          for (var j = 0; j < 3; j += 1) {
            for (var k = 0; k < 3; k += 1){
              result.push(big_region[j+6][k])
              }
          }
        }
        return result;
      }
      function block4(big_region) {
        var result = [];
        for (var l = 0; l <1; l +=1){ //test 1
        result[l] = []
            for (var j = 0; j < 3; j += 1) {
              for (var k = 0; k < 3; k += 1){
                result.push(big_region[j][k+3])
                }
            }
          }
          return result;
        }
// // Possible Solution
//
// function possible_solution(arr1, arr2, arr3) {
//   let union = [...arr1, ...arr2, ...arr3];
//   let b = one_to_nine();
//   return  b.filter(x => union.indexOf(x) < 0 );
// }
// // Auxilary function
//
// function one_to_nine() {
//   var result = [];
//   for (var i = 0; i <= 9; i += 1) {
//     result[i] = i;
//   }
//   return result;
// }

// function region(big_region) {
//   var result = []
//     for (var i = 0;  )
// }


//console.log(small_region(array_num()));
var testing_var = string_to_array(prob_two);
// console.log(testing_var);
// console.log("-------");
// console.log(math.size(big_region(testing_var)));
//console.log(big_region(testing_var)[0][0][1]);
// console.log("-------");
// console.log(math.squeeze(big_region(testing_var)));
//console.log(testing_var);
console.log("--Math Library---");
console.log(big_region(testing_var));
pr(block1(testing_var));
pr(block2(testing_var));
pr(block3(testing_var));
pr(block4(testing_var));

// print


//var example = math.Matrix(math.range(0, 4));
var a = [[[0, 1, 2]]];

//console.log(example);
// console.table("vertical :\n", string_to_array(prob_two));
//console.log(array_num(), permutation());
