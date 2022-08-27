// Write a program to find the factorial of a number.
const ps= require("prompt-sync");
const prompt = ps();

let n = prompt("Enter Number: ");

let ans=1;
while(n>0)
{
    ans=ans*n;
    n--;
}
console.log(ans);