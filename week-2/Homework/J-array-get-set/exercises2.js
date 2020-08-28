/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/
function numFinalMatriz(number) {

    return number.push(5);
}

function inicioMatriz(change) {

    return change.unshift(0);
}
var numbers = [1, 2, 3, 4]; // Don't change this array literal declaration

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/