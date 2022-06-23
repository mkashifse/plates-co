let numberOfRows = 6;
let numberOfCols = 6;
let array2d = [];

for (let i = 0; i < numberOfRows; i++) {
  let row = [];
  for (let j = 0; j < numberOfCols; j++) {
    row.push(j+1); //  [0,1,2]
  }
  array2d.push(row); // [0,1,2]
}


console.log(array2d);
