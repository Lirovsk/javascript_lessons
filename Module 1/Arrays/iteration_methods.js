/*
Esse arquivo contém métodos de iteração e tranformação que podem ser usados com arrays.
This file contains iteration and transformation methods that can be used with arrays.
*/
// Método forEach() - O método forEach() é usado para executar uma função em cada elemento de uma array.
// forEach() method - The forEach() method is used to execute a function on each element of an array.
let array4 = [1, 2, 3, 4, 5];
array4.forEach((element, index) => {
    console.log(`O elemento ${element} está na posição ${index} da array`);
});

// Método map() - O método map() é usado para criar uma nova array com os resultados da chamada de uma função para cada elemento da array.
// map() method - The map() method is used to create a new array with the results of calling a function on every element in the array.
let array5 = [1, 2, 3, 4, 5];
let newArray = array5.map(element => element * 2); // Multiplica cada elemento da array por 2 e cria uma nova array com os resultados / Multiply each element of the array by 2 and create a new array with the results
console.log(newArray);
// OBS: O método map() não altera a array original / The map() method does not change the original array
// OBS: O método também usa uma função arrow como argumento / The method also uses an arrow function as argument

// Método filter() - O método filter() é usado para criar uma nova array com todos os elementos que passaram em um teste especificado em uma função.
// filter() method - The filter() method is used to create a new array with all elements that pass the test implemented by the provided function.
let array6 = [1, 2, 3, 4, 5];
let filteredArray = array6.filter(element => element % 2 === 0); // Cria uma nova array com todos os elementos pares / Create a new array with all even elements
console.log(filteredArray);
// OBS: O método filter() não altera a array original / The filter() method does not change the original array
// OBS: O método também usa uma função arrow como argumento / The method also uses an arrow function as argument

// Método reduce() - O método reduce() executa uma função em cada elemento da array para produzir um único valor de retorno.
// reduce() method - The reduce() method executes a function on each element of the array to produce a single return value.
let array7 = [1, 2, 3, 4, 5];
let reducedValeu = array7.reduce((acumulador, elemento) => acumulador + (elemento * 2), 0); // Soma o dobro de cada elemento da array com o valor inicial 0 / Sum the double of each element of the array with the initial value 0
console.log(reducedValeu);
// OBS: O método reduce() não altera a array original / The reduce() method does not change the original array
// OBS: O método também usa uma função arrow como argumento e um valor inicial / The method also uses an arrow function as argument and an initial value

// Método find() - O método find() é usado para retornar o primeiro elemento que passou em um teste especificado em uma função.
// find() method - The find() method is used to return the first element that pass the test implemented by the provided function.
let array8 = [1, 2, 3, 4, 5];
let foundElement = array8.find(element => element % 2 === 0); // Retorna o primeiro elemento par / Return the first even element
console.log(foundElement);
// OBS:O método find() não retorna mais de um elemento

// Método findIndex() - O método findIndex() é usado para retornar o índice do primeiro elemento que passou em um teste especificado em uma função.
// findIndex() method - The findIndex() method is used to return the index of the first element that pass the test implemented by the provided function.
let array9 = [1, 2, 3, 4, 5];
let foundIndex = array9.findIndex(element => element % 2 === 0); // Retorna o índice do primeiro elemento par / Return the index of the first even element
console.log(foundIndex);
// OBS: O método findIndex() não retorna mais de um índice

// Método every() e some() - Esses método servem para retornar um valor booleano dada uma função como argumento
// Every() and some() methods - These methods return a boolean value for a given function as parameter
let array10 = [1, 2, 4, 6];
let allEvennumbers = array10.every(num => num % 2 === 0); // Essa funcção retornará verdadeiro caso todos os número da lista sejam pares / This fucntion will return True in case all the numbers in it are even.
console.log(allEvennumbers);
let someEvenNumbers = array10.some(num => num % 2 === 0); // Essa funcção retornará verdadeiro caso um dos números da lista for par / This function will returna True in case at least on number of it ir even
console.log(someEvenNumbers);

