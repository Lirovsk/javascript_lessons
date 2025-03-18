/*
Just to show some comparative method between arrays.
*/
let array1 = Array.from('banana');
let array2 = Array.from('banana');
console.log(array1);
console.log(array2);
console.log(array1.every((value, index) => value === array2[index])) // This way the comparitve method works
let array3 = [1, 2];
let array4 = [1, 2];
console.log((array3 == array4)); // This way don't
