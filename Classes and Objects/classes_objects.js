/*
Treinando a criação e manipulação de objetos em javascript
Trainnig the definition and manipulationg of objects in javascript 
*/
//Uma variável assumindo o valor de uma função
// A variable assumig a function value
const printf = console.log;
printf('olá, mundo\n');

// Criando um objeto chamado pessoa
// Creating an object named pessoa
const pessoa = {
    nome: 'João Vítor',
    idade: 20, 
    altura: 1.90
};

// Imprimindo o objeto pessoa
// Printing the pessoa object
printf(pessoa);
printf('');

// Imprimindo apenas os atributos selecionados do objeto pessoa
// Printing only selected atributes of the pessoa object
printf(pessoa.nome);
printf(pessoa.idade + '\n');

printf(pessoa['altura']);
printf(pessoa['nome']);


