/*
Esse arquivo contém simples testes e anotações sobre manipulações de arrays
This file contains symples tests and notes about arrays manipulation
*/
// O primeiro método para manipular arrays é o push(), que adiciona um ou mais elementos ao final de uma array
// The first method to manipulate arrays is push(), which adds one or more elements to the end of an array
let array = [1, 2, 3, 4, 5];
console.log(array); // Imprime a arrays
array.push(6); // Adiciona o número 6 ao final da array
console.log(array); // Imprime a array após a adição do número 6

// O segundo método é o pop(), que remove o último elemento de uma array
// The second method is pop(), which removes the last element of an array
let array2 = [1, 2, 3, 4, 5];
console.log(array2); // Imprime a array / Print the array
let array2Pop = array2.pop(); // Remove o último elemento da array / Remove the last item of the array
console.log(array2); // Imprime a array após a remoção do último elemento / Print the arrays after  the item has been removed

// É importante salientar que o metodo não apenas remove u último item, este método também retorna o valor retirado
// It's important to anfatize that this method not only remove the last item of the array, but it also return the removed item
console.log(array2Pop); // Imprimindo o valor removido da array / Printing the removed item from the array

// O terceiro método é o shift(), esse método remove o primeiro item de uma array
// The third method is the shift(), this method removes the first item of an array
let array3 = [1, 2, 3, 4, 5];
console.log(array3); // Imprimindo a array / Printing the array
array3Shift = array3.shift();
console.log(array3); // Imprimindo a array após ter ser primeiro item removido / Printing the array after its first has been removed
console.log(array3Shift); // Imprimindo o item removido da array / Printing the removed item from the array


