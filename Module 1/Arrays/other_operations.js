/*
Esse arquivo contém outras operações que podem ser feitas com arrays.
This file contains other operations tha can be used with arrays.
*/
// Método join() - O método join() é usado para juntar todos os elementos de uma array em uma string.
// join() method - The join() method is used to join all elements of an array into a string.
let array1 = ['Olá', 'mundo', '!'];
joinedArray = array1.join('-'); // O argumento passado para o método join() é o separador que será usado para unir os elementos da array / The argument passed to the join() method is the separator that will be used to join the elements of the array
console.log(joinedArray); 

// Método reverse() - O método reverse() é usado para inverter a ordem dos elementos de uma array.
// reverse() method - The reverse() method is used to reverse the order of the elements of an array.
let array2 = [1, 2, 3, 4, 5];
array2.reverse(); // Inverte a ordem dos elementos da array e não retorna um valor, apenas interfere na ordem da própria array / Reverse the order of the elements of the array and does not return a value, only interfere in the order of the array itself
console.log(array2);

// Método sort() - O método sort() é usado para ordenar os elementos de uma array.
// sort() method - The sort() method is used to sort the elements of an array.
let array3 = [10, 15, 3, 4, 22, 1];
array3.sort(); // Como padrão o método ordena em ordem cfrescente de string // By default the method sort in crescent order of string
console.log(array3);
// Para ordenar em ordem crescente de número é necessário passar uma função de comparação como argumento
// To sort in crescent order of number is necessary to pass a comparison function as argument
array3.sort((a, b) => a - b); // Dados os numeros a e b, se a - b for menor que 0, a será colocado antes de b, se for maior que 0, b será colocado antes de a, se for igual a 0, a e b permanecerão na mesma ordem / Given the numbers a and b, if a - b is less than 0, a will be placed before b, if it is greater than 0, b will be placed before a, if it is equal to 0, a and b will remain in the same order
console.log(array3);

