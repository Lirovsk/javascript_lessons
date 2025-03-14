/*
Esse arquivo contem a resolução de um desafio de código. O desafio é contruir um porgrama que calcule o IMC de uma pessoa.
This file contains the resolotion of a code challenge. The challeng is to create a program that is able to calculate a person IMC.*/

// Declarando as variáveis a sereme usada no sistema
// Declaring the variables used in the system
let weight = 84;
let height = 1.90;
let imc;

// Calculando o valor do IMC
// Computing the IMC value
imc = weight / (height ** 2);

// Definindo a qual categoria o IMC está inserido e imprindo essa informação na tela
// Defining in wich category the IMC fits
if (imc.toFixed(2) < 18.5){
    console.log('O IMC é: ' + imc.toFixed(2) + '.')
    console.log('Atente-se a alimentação. Esse IMC pertence a faixa de magreza.')
}
if (imc.toFixed(2) > 18.5 && imc.toFixed(2) < 25){
    console.log('O IMC é: ' + imc.toFixed(2) + '.')
    console.log('Mantenha-se assim! esse IMC faz parte da faixa de peso normal.')
}
if (imc.toFixed(2) > 25 && imc.toFixed(2) < 30){
    console.log('O IMC é: ' + imc.toFixed(2) + '.')
    console.log('Fique de olho, Esse IMC está inserido na faixa de sobrepeso.')
}
if (imc.toFixed(2) > 30 && imc.toFixed(2) < 40){
    console.log('O IMC é: ' + imc.toFixed(2) + '.')
    console.log('Cuidado, esse IMC faz parte da faixa de obesidade!')
}
if (imc.toFixed(2) > 40){
    console.log('O IMC é: ' + imc.toFixed(2) + '.')
    console.log('Alerta, esse IMC representa obesidade morbida!!')
}
