/* 
Esse arquivo conté a resolução de um desafio utilizando a estrutura 'for' - O desafio consiste em criar uma função que leia uma sequencia de carateres e consiga encontrar e contar
quantas vezes a palavra aparece
This file contains the resolutions of challenge using the loop 'for'- The challenge is tocreate a function that reads a caracter sequence and can foun and count how many times this
 sequence appears on a given text
*/
let sequenceToCount = 'macaco';
let text = "Sob o céu de outono, a cidade se vestia de nuances sutis e contornos surpreendentes. Cada esquina revelava vestígios de histórias esquecidas e momentos de leve encantamento. Em um beco tranquilo, um traço discreto na parede formava uma inscrição que passava despercebida pela maioria: macaco. A composição simples de letras ecoava, sem ostentação, os murmúrios de um passado anônimo. Enquanto os passos seguiam seu curso, esse detalhe singular se integrava à poesia silenciosa do lugar."
let arrayToBeCounted = Array.from(sequenceToCount);
let textArray = Array.from(text);

let textLength = textArray.length;
let toBeCountedLength = arrayToBeCounted.length
let appears = 0;

for (let aux1=0; aux1<(textLength-(toBeCountedLength-1)); aux1++){
    let arrayAux = [];
    for(let aux2=0; aux2<sequenceToCount.length; aux2++){
        arrayAux.push(textArray[aux1+aux2]);
    }
    if(arrayToBeCounted.every((value, index) => value === arrayAux[index])){
        appears++;
    }
}
console.log(appears);

// Now its time to transform all this code into one function
function countWord(partSequence, mainSequence){
    let pSequence = Array.from(String(partSequence));
    let mSequence = Array.from(String(mainSequence));
    let partLength = pSequence.length;
    let mainLength = mSequence.length;
    let resposta = [0];
    for(let aux1=0; aux1<(mainLength-(partLength-1)); aux1++){
        let arrayAux = [];
        for(let aux2=0; aux2<partLength; aux2++){
            arrayAux.push(mSequence[aux1+aux2]);
        }
        if(pSequence.every((value, index) => value === arrayAux[index])){
            resposta[0]++
            resposta.push(aux1);
        }
    }
    return resposta;
}

let resp = countWord('macaco', text);
console.log(`A palavra macaco aparece ${resp[0]} vez(es) no texto. seus locais de aparição são: ${resp[1]}`);
