// Write a program to find whether a given year is a leap year or not.
const ps= require("prompt-sync");
const prompt = ps();
let year= prompt("year: ");
if(year%4===0)
{
    if(year%100===0)
    {
        if(year%400===0)
            console.log("Leap Year");
        else
            console.log("Not leap Year");
    }
    else
        console.log("Leap Year");
}
else
{
    console.log("Not a leap Year");
}