/*
Desafio de cálculo de viagem.
Existirão 6 variáveis:
- Distância em KM;
- Consumo de gasolina por KM de uma carro com gasolina;
- Consumo de gasolina por KM de uma carro com etanol;
- Qual combustível está no tanque do carro;
- Preço da gasolina;
- Preço do etanol.
O programa deve retornar o valor total da viagem com base nessas seis variáveis.
*/
// Declarando constantes dos valores dos combustíveis e o consumo do carro
const gasPrice = 6.1; // valor da gasolina
const etanolprice = 4.5; // valor do etanol
const gasConsumption = 12;
const estanolConsumption = 10;

// Declarando variáveis diversas
let distance;
let typeFuel;
let precoFinal;

console.log('Gasto calculado para uma viagem de 250KM usando gasolina:');
distance = 250;
typeFuel = 'gasolina'

if (typeFuel === 'gasolina'){
    precoFinal = (distance / gasConsumption) * gasPrice;
    console.log('O valor da viagem com gasolina é '+ precoFinal.toFixed(2));
} else {
    precoFinal = (distance / estanolConsumption) * etanolprice;
    console.log('O valor da viagem com etanol é '+ precoFinal.toFixed(2));
}

console.log('\nGasto calculado para uma viagem de 250KM usando etanol:');
typeFuel = 'etanol';

if (typeFuel === 'gasolina'){
    precoFinal = (distance / gasConsumption) * gasPrice;
    console.log('O valor da viagem com gasolina é '+ precoFinal.toFixed(2));
} else {
    precoFinal = (distance / estanolConsumption) * etanolprice;
    console.log('O valor da viagem com etanol é '+ precoFinal.toFixed(2));
}
