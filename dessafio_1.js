/*
Desafio de cálculo de viagem.
Existirão 3 variáveis:
- Distância em KM
- Consumo de gasolina por KM de uma carro
- Preço da gasolina
O programa deve retornar o valor total da biaem com baso nessas Três variáveis*/

let distance;
let gasConsumption;
let gasPrice;
let totalValue;

distance = 100;
gasConsumption = 14;
gasPrice = 4.69;

totalValue = (distance/gasConsumption) * gasPrice;

console.log(totalValue);
