/*var array = [];
var array2 = [];
var i = Math.floor(Math.random() * 2);
var alto = 4,
  largo = 8;

for (var i = 0; i < alto; i++) {
  for (var j = 0; j < largo; j++) {
    let x = Math.floor(Math.random() * 2);
    array2.push(x);
  }

  array.push(Object.values(array2));
  array2 = [];
}

console.log(array);
*/

let tablero = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
var cont = 0;

for (let i = 0; i < 4; i++) {
  for (var j = 0; j < 8; j++) {
    //Encontrar vecinos 1/*
    if (tablero[i][j] == 1) {
        let yo = [i,j]
      console.log(i + " - " + j);
      for (var k = i - 1; k <= i + 1; k++) {
        for (var l = j - 1; l <= j + 1; l++) {
          if (k < 0) k = 0;
          if (l < 0) l = 0;
          let kl = [k,l]
          if (tablero[k][l] == 1 && kl !=yo) {
            console.log(k + " " + l);
          }
        }
      }
    }
     //Encontrar vecinos 0
     if (tablero[i][j] == 0) {
        let yo = [i,j]
      //console.log(i + " . " + j);
      for (var k1 = i - 1; k1 <= i + 1; k1++) {
        for (var l1 = j - 1; l1 <= j + 1; l1++) {
          if (k1 < 0) k1 = 0;
          if (l1 < 0) l1 = 0;
          //let kl = [k,l]
          if (tablero[k][l] == 1) {
            console.log(k1 + " " + l1);
          }
        }
      }
    }
  }
}

function Vecinos() {}
