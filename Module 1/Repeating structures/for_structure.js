/*
Esse arquivo contém uma explicação sobre a sintaxe e outras infromações importantes sobre o método for
This file contains an explanation about syntax and other important informations about for
*/
// Sintaxe básica
// Basic syntax
for (let i = 0; i<10; i++){
    console.log((i+1));
}
// Usando a estrutura for para contar quantos "zeros" um número tem
// Using the for structure to count hao many "zeros" there are on a number
let number = 100;
let aux = 0;
for (i=number; i>=10; i=i/10){
    aux++; // This structure divide the number till its not grater than 10
}
console.log(`O número de zeros do número é ${aux}.`); // Here the number of digits before the most valuable one
console.log(`O número de algarismos do número é ${aux+1}`); // Here is the number of digits of a number

// Usando 'for' para contar a recorreência de um determinado dígito em um algarismo
// Using 'for' to count the reconrrency of a digit in a number
number = 494612387960104;
let arrayNew =  Array.from(String(number)); // uma arrat é criada com base em número dado / An aray is created based on a given number
console.log(arrayNew); // Impressão apenas para conferir a criação da array / Printing only to ensure thr array was sucscessfuly created
let numberToBeCounted = 4;
aux = 0; 
for (let i=0; i<arrayNew.length; i++){
    if (arrayNew[i]==numberToBeCounted){
        aux++;
    }
} // Nota: o laço não estava funcionando porque não defini o limite baseado no tamanho da array (.length) / Note: this loop did not work at first beacause a didnt setup it based on the array length (.length)
console.log(`O número de ${numberToBeCounted} em ${number} é ${aux}`);
