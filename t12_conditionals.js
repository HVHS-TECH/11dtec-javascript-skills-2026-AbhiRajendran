/* 
Introduction
*/
console.log("Running t12_conditionals.js")
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

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")



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


function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");
    let userName = NAME_FIELD.value;
    let userAge = AGE_FIELD.value;
    let userMoney = Boolean(MONEY_FIELD.value);
    OUTPUT.innerHTML = "<h2>Welcome to the Shop, " + userName + ". You are " + userAge + " years old. You have " + userMoney + " dollars.</h2>";

    if (userMoney >= 4) {
        OUTPUT.innerHTML = "<h2>You can buy a $4 chocolate Bar. </h2>";
    }
    else (userMoney < 4); {
        OUTPUT.innerHTML = "<h2>You can't even afford a chocolate Bar. Get Out!!</h2>";
    }
}




