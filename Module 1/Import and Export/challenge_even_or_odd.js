import {get, print} from './auxciliar_functions.js';

let arrayNumber = [];
let numbersToBeRead = get();

for(let aux1=0; aux1<numbersToBeRead; aux1++){
    arrayNumber.push(get());
}
//print(arrayNumber);
let auxEven = 0;
let auxOdd = 0;
for(let aux1=0; aux1<arrayNumber.length; aux1++){
    if(arrayNumber[aux1]%2===0){
        if(arrayNumber[aux1]>auxEven){auxEven = arrayNumber[aux1]}   
    }else{
        if(arrayNumber[aux1]>auxOdd){auxOdd = arrayNumber[aux1]}
    }
}
print(auxEven);
print(auxOdd);
