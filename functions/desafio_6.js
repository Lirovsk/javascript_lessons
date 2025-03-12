/*
Esse arquivo contém funções aleatórias para exercitar a criação e invocação de funções.
This files contains random functions to excercise the definition and calls of functions 
*/
// Function say my name
function sayName(name){
    console.log('My name is ' + name);
}

// Function to verify age
function ageVerify(age){
    if (age<18){
        console.log('You are a minor.');
    }
    if (age >= 18 && age < 65){
        console.log('You are an adult.');
    }
    if(age >= 65){
        console.log('You are an elderly person');
    }
}

// Defining a imnediately called function
(function sayMyAge(age){
    console.log("I'm " + age + " years old");
})(20);

