/*Esse exercício consiste em criar um algaritmo que recebe 3 notas e retorna a média dessas notas.
Com o valor da média esse progrma deve retornar o status do aluno baseado na sua média.
Média < 5: Reprovado;
Média > 5 e <7: Recuperação;
Média > 7: Aprovado
*/
// Declarando as constantes de notas mínimas
// Declaring the minimal grade constants
const notaReprovacao = 5;
const notaRecuperacao = 7;

// Declaranod as variáveis a serem usadas pelos sistema
// Declaring the variables used by the program
let media;
let nota1 = 8;
let nota2 = 6;
let nota3 = 9;

// Calculando a média das notas
// Calculating the grade average
media = (nota1 + nota2 + nota3) / 3;

// Estrutura condicional para analisar a média e imprimir o status do aluno
// Conditional structure that analyzes the average value and then prints the student status
if (media < notaReprovacao){
    console.log('a média do aluno é '+ media.toFixed(2) +' e ele está reprovado.');
} else if (media > notaReprovacao && media < notaRecuperacao){
    console.log('a média do aluno é '+ media.toFixed(2) +' e ele está de recuperação.')
}else {
    console.log('a média do aluno é '+ media.toFixed(2) +' e ele está aprovado.')
}
