/*
Esse arquivo contém novos métodos e funcionalidades do ES6+
This file contains new methods and functionalities from ES6+
*/
// Métodos Array.from() e Array.of()
// Array.from() and Arrat.of() methods

// Array.from() pode criar arrays de objetos iteráveis
// Array.from() can create arrays from iterable objects
let conjunto = new Set([1, 2, 3]);
let arrayDoSet = Array.from(conjunto); // [1, 2, 3]
console.log(arrayDoSet);

// Array.of() pode criar arrays a partir de um número variável de argumentos
// Array.of() can create arrays from an ordinary number of arguments
let novoArray = Array.of(5, 10, 15); // [5, 10, 15]
console.log(novoArray);

// Métodos flat() e flatMap()
// flat() and flatMap() methods

// flat() achata as arrays até um certo nível
// flat() flats the arrays until a certain level
let matriz = [1, [2, 3], [[4, 5], 11]];
let plano = matriz.flat(2);
console.log(plano)

// flatMap() realiza um mapeamento e em seguida achata a array
// flatMap() generates a mapping then flat the array
let arr = [1, 2, 3];
let resultado = arr.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6]
// Primeiramente esse método pode parecer sem uso, repare que diferente de um mapeamento comum os antiogos valores se mantém e são achatados em uma lista só no formato: numero original[1], numero mapeado[1]
// At first this method mau looks useless, but take a close look and see that, unlike a comum mapping, it keeps the originals values followed by the mapped ones.
let resultado2 = arr.map(number => [number, number * 2]);
console.log(resultado);
console.log(resultado2);
