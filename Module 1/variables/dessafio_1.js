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

console.log(totalValue.toFixed(2)); // O método toFixed(2) é utilizado para limitar o número de casas decimais a serem exibidas. Neste caso, 2 casas decimais.
