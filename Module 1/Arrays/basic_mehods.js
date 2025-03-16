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

// É possível declarar arrasy usando um contrutos de arrays
// It is possible to declare an arrays using a constructor
let arrayC = new Array(1, 2, 3, 4, 5);
console.log(arrayC); // Imprimindo a array criada com o construtor / Printing the arrays created using the constructor

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

// Propriedade lenght, retorna o tamanho da array.
// Lenght property, return the lenght of the array.
let array4 = [1, 1, 1, 1, 1];
console.log(array4.length); // Imprimindo o tamanho dessa array / Printing the size of this array
// O tamanho de uma array é ajustado ao adicionar um item á ela, o mesmo ocorre ao remover um item
// The lenght of an array is ajusted when an item is added or removed
array4.push(1);
console.log(array4.length);

// The fourth method is the splice(). It's responsible for addin and removing items on specified plas of an array
// O quarto método é o splice(). é responsável por adicionar e remover itens em locais definidos de uma array
let array5 = [1, 2, 3, 4, 5];
array5.splice(1, 1);
console.log(array5);

array5.splice(1,0,2); // Adiciona um item sem remover nenhum outro
console.log(array5);
array5.splice(1, 1, 'dois'); // adiciona um item removendo o que estava no seu lugar anetriomente
console.log(array5);

// Como criar sublista de uma array
// how to create subarrays from another array
let array6 = [1, 2, 3, 4, 5];
subArray = array6.slice(0,2); // Nesse caso a subarray vai conter os elementos de índice 0 e 1 da array original / In this case the subarray will contain the elements of index 0 and 1 of the original array
console.log(subArray);
console.log(array6);

// Como adicionar elementos no ínicio de uma array
// How to add items at the beginning of an array
let array7 = [1, 2, 3, 4, 5];
array7.unshift(0); // Adiciona o número 0 no início da array / Add the number 0 at the beginning of the array
console.log(array7); // Imprime a array após a adição do número 0 / Print the array after the number 0 has been added

// Como concatenar arrays
// How to concatenate arrays
let array8 = [1, 2, 3, 4, 5];
let array9 = [6, 7, 8, 9, 10];
let array10 = array8.concat(array9); // Concatena as duas arrays / Concatenate the two arrays
console.log(array10); // Imprime a array concatenada / Print the concatenated array
console.log(array10.length);

// 