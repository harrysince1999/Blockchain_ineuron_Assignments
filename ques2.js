// Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.
const ps= require("prompt-sync");
const prompt = ps();

let c = prompt("Enter Temperature in Celcius ");

let f= (9*c)/5+32;
console.log(`${c}C is ${f}F`);
