// Esse arquivo contém informações de como usar booleanos e estruturas condicionais básicas em JavaScript.

// declaração de booleanos
let isTrue = true;
let isFalse = false;

console.log('Imprimindo variáveis booleanas\n');
console.log(isTrue); // true
console.log(isFalse); // false
console.log('\n');

// operadores de comparação
console.log('trabalhando comparação entre números\n');
let a = 3;
let b = '3';
let c = 4;

console.log(a == b); // Verdadeiro porque uma conversão de tipo é feita
console.log(a === b); // Falso porque os tipos são diferentes
console.log(a < c); // Verdadeiro porque 3 é menor que 4
console.log(a > c); // Falso porque 3 não é maior que 4
console.log(b < c); // Verdadeiro porque '3' é convertido para 3
console.log('\n');

// Estruturas condicionais
console.log('Estruturas condicionais\n');
let x = 10;
let y = 20;

if (x < y){
    console.log('x é menor que 20\n');
}
if (x > y){
    console.log('x é maior que 20\n')
}

if (y<x){
    console.log('y é menor que x\n');
} else {
    console.log('y é maior que x\n');
}

// Usando Else If para criar uma estrutura condicional
console.log('usando estrutura Else If\n')
let num = 0;
const numCompair = 5;

if (num === 0){
    console.log('Número inválido\n');
} else if (num > numCompair){
    console.log('O número principal é maior que o número de comparação\n');
} else {
    console.log('O número de comparação é maior que o número principal\n');
}

num = 4;

if (num === 0){
    console.log('Número inválido\n');
} else if (num > numCompair){
    console.log('O número principal é maior que o número de comparação\n');
} else {
    console.log('O número de comparação é maior que o número principal\n');
}

num = 8;

if (num === 0){
    console.log('Número inválido\n');
} else if (num > numCompair){
    console.log('O número principal é maior que o número de comparação\n');
} else {
    console.log('O número de comparação é maior que o número principal\n');
}
