/*
This file contains only tests to help build the challenge_for.js
*/

let array1 = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i'];
let array2 = [1, 2, 3, 4];
let array3 = [];
array1.forEach((letter, index) => {if(index<array2.length){array3.push(letter)}}) // This method works 
//console.log(array3);

let lengthA = array2.length;
for(let i=0; i<(array1.length-(lengthA-1)); i++){
    let arrayB = [];
    for(let o=0; o<lengthA; o++){
            arrayB.push(array1[i+o]);
    }
    console.log(arrayB);
}
// This last loop is better to the objective os the aplication