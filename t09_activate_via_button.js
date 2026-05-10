/* 
Introduction
*/
console.log("Running t09_activate_via_button.js")
console.log("Is it running? Haha its working.")

//Variables

var year = "2026"
var name = "Abhi"
var age = 15
var number1 = 502.5
var number2 = 10
var number3 = 2
var dollar = 0.67
var number4 = 3
var futureage = age + number2
var moneyleft = dollar / number3
var addmoney = moneyleft + number4
console.log("Hi, My name is " + name + ". As of " + year + ", I'm " + age + " years old. I was born in " + number1 * 4 + ". In 10 years, I will be " + futureage + ". I have " + dollar + " cents. I spend half of my money, now I have " + moneyleft + " cents. Then I got $3, Now I have " + addmoney + " cents.");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
OUTPUT.innerHTML = "<h2>Hi, My name is " + name + ". As of " + year + ", I'm " + age + " years old. I was born in " + number1 * 4 + ". In 10 years, I will be " + futureage + ". I have " + dollar + " cents. I spend half of my money, now I have " + moneyleft + " cents. Then I got $3, Now I have " + addmoney + " cents.</h2>"



/*
Main Code
*/

writeLine()






/*
Functions
*/

function writeLine() {
    OUTPUT.innerHTML += "<h2> Welcome to the Shop</h2>";
}

function start() {

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
    OUTPUT.innerHTML = "<h2>How are you.</h2>"


}               