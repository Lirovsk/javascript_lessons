/*
Esse arquivo contem a resolução de um desafio de código. O desafio é contruir um porgrama que calcule o IMC de uma pessoa mas agora usanod funções.
This file contains the resolotion of a code challenge. The challeng is to create a program that is able to calculate a person IMC but now using functions.
*/
// Declarando as funções que calculam o IMC e imprimem em qual categoria o IMC se encontra
// Declaring ths functions tha calculate the IMC and print the category the IMC fits
function calculoImc(peso, altura){
    let imc
    imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function imcCategory(imc){
    let nImc = Number(imc);
    if (nImc.toFixed(2) < 18.5){
        console.log('O IMC é: ' + nImc.toFixed(2) + '.');
        console.log('Atente-se a alimentação. Esse IMC pertence a faixa de magreza.');
    }
    if (nImc.toFixed(2) > 18.5 && nImc.toFixed(2) < 25){
        console.log('O IMC é: ' + nImc.toFixed(2) + '.');
        console.log('Mantenha-se assim! esse IMC faz parte da faixa de peso normal.');
    }
    if (nImc.toFixed(2) > 25 && nImc.toFixed(2) < 30){
        console.log('O IMC é: ' + nImc.toFixed(2) + '.');
        console.log('Fique de olho, Esse IMC está inserido na faixa de sobrepeso.');
    }
    if (nImc.toFixed(2) > 30 && nImc.toFixed(2) < 40){
        console.log('O IMC é: ' + nImc.toFixed(2) + '.');
        console.log('Cuidado, esse IMC faz parte da faixa de obesidade!');
    }
    if (nImc.toFixed(2) > 40){
        console.log('O IMC é: ' + nImc.toFixed(2) + '.');
        console.log('Alerta, esse IMC representa obesidade morbida!!');
    }
}

function main(){
    let peso = 84;
    let altura = 1.90;
    let resultadoImc;

    console.log('Calculo de IMC com altura de 1,90m e peso de ' + peso);
    resultadoImc = calculoImc(peso, altura);
    imcCategory(resultadoImc);

}

main();
