/*
Nesse arquivo Existirão algumas funções que serão exportadas para outro script.
In this file there will be some functions tha going to be exported to another file.
*/
let i=0;
export function get(){
    let array = [6, 1, 3, 4, 7, 5, 3];
    let value = array[i];
    i++
    return value;
    
}

export function print(texto){
    console.log(texto);
}
