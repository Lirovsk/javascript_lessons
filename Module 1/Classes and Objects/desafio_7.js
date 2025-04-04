/*
Esse arquivo contém a resolução do desafio 7. O desafio consiste em criar uma classe chamada de carro.
This file contains the resolution of the 7th challenge. The challenge consits of creating a class named carro.
*/
// Criando a classe
// Creating the class
class carro {
    marca;
    cor;
    consumoMedio;

    constructor(marca, cor, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumo;
        console.log('Carro adicionado.\n');
    }

    gastoNoPercurso(distc, gasPrice) {
        let price;
        price = (distc / this.consumoMedio) * gasPrice;
        return price;
    }
}

// Criando a funcção main
// Creating the main function
(function main() {
    // Declarando constantes e variáveis a serem usada no código
    // Declaring constants and variables to be used in the program
    const gasPrice = 6.2;
    let distc;
    let creta = new carro('Hyundai', 'Prata', 12);
    // Chamando o método que calcula quanto de gasolina será gasta em um determinado trajeto
    // Calling the method responsible to calculate how much will be spend on gas in a certain distance
    distc = 250;
    let gasSpent = creta.gastoNoPercurso(distc, gasPrice);
    console.log(`The amount spent on fuel will be ${gasSpent} on a trip of ${distc}KM.\n`);
    distc = 800;
    gasSpent = creta.gastoNoPercurso(distc, gasPrice);
    console.log(`The amount spent on fuel will be ${gasSpent} on a trip of ${distc}KM.\n`);
})();