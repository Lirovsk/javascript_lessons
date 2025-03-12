/*
Esse arquivo contém a resolução de um desafio. O desafio consiste em criar um programa que calcule o valor a ser pago de um um produto
considerando o valor da etiqueta e a forma de pagamento
This file contains the resolution of a challenge. The challenge consists of creating a program avble to calculate the right price to pay 
based on the product price and the method of payment.
Pagamento em dinheiro e avista: 15% de desconto.
Pagamento em até duas vezes: valor integral da etiqueta.
Pagamento em mais de duas vezes: valor do produto mais 10% de juros. 
*/
// Declaranod constantes a serem usadas no programa
// Declaring constants to be used in the program
const descontoVista = 15;
const valorJuros = 10;

// Declarando variáveis a serem usadas no programa
// Declaring variables to be used in the program
let valorProduto = 10;
let formaDePagamento = 'Pix';
let quantidadeParcelas = 2;

// Criando o calculo de valor baseado na forma de pagamento 
// Creating the value calculation based on the payment method
if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix'){
    valorProduto = valorProduto - ((valorProduto * descontoVista) / 100);
}

if (formaDePagamento === 'Parcelado'){
    if (quantidadeParcelas > 2){
        valorProduto = valorProduto + ((valorProduto * valorJuros) / 100);
    }
}

// Imprimindo o valor do produto
// Printing the product price
if (formaDePagamento !== 'Parcelado'){
    console.log('O valor do produto é R$' + valorProduto.toFixed(2) + ' com o método de pagamento sendo: ' + formaDePagamento +'.');
}else {
    console.log('O valor do produto parcelado em ' + quantidadeParcelas + ' vezes é R$' + valorProduto);
}

