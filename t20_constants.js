/* 
Introduction
*/
console.log("Running t12_conditionals.js")
console.log("Is it running? Haha its working.")

//Variables


const OUTPUT = document.getElementById("spaceForJavaScriptOutput")



/*
Main Code
*/




/*
Functions
*/

function writeLine() {
    OUTPUT.innerHTML = "<h2> Welcome to the Shop</h2>";
}


function getFormInput() {

    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");
    const NAME_LENGTH = 3;
    const MONEY = 4;
    let userName = String(NAME_FIELD.value);
    let userAge = Number(AGE_FIELD.value);
    let userMoney = Number(MONEY_FIELD.value); 

    if (userName.length < NAME_LENGTH)  {
        alert("Name must be three letters long!");
        return false; 
    } 

    if (/\d/.test(NAME_FIELD.value)) {
        alert("Name cannot contain numbers");
        return false;
    }

    if (userMoney >= MONEY) {
        OUTPUT.innerHTML = "<h2>Welcome to the Shop, " + userName + ". <br> <br> You are " + userAge + " years old. You have " + userMoney + " dollars. <br> <br> You can buy a $4 chocolate Bar. </h2>";
    } else {
        OUTPUT.innerHTML = "<h2>Welcome to the Shop, " + userName + ". <br> <br> You are " + userAge + " years old. You have " + userMoney + " dollars. <br> <br> You can't even afford a chocolate Bar. Get Out!!</h2>";
    }
    
   return true;
}

function calculatePay() {
    const NAME_FIELD = document.getElementById("nameField");
    const OUTPUT = document.getElementById("output");
    const MONEY_FIELD = document.getElementById("moneyField");
    let _price = 4;
    let _money = Number(MONEY_FIELD.value);
    let balance = _money - _price;
    if (/\d/.test(NAME_FIELD.value)) {
        alert("Name cannot contain numbers");
        return false;
    }
    OUTPUT.innerHTML = "<h2>You have $" + balance + " dollars left. </h2>"
}

function chooseOpinion() {
    const NAME_FIELD = document.getElementById("nameField");
    const OUTPUT = document.getElementById("chocolate");
    const CHOOSE_FIELD = document.getElementById("chocolateField");
    let classArray = ["You loath chocolate.", "Chocolate is meh.", "Chocolate is pretty good.", "Chocolate is the best thing ever."];
    let choice = CHOOSE_FIELD.value;
    if (/\d/.test(NAME_FIELD.value)) {
        alert("Name cannot contain numbers");
        return false;
    }
    OUTPUT.innerHTML = "<h2>You chose:" + classArray[choice] + "</h2>";
}

let shoppingArray = [];

function shoppingList() {
    const NAME_FIELD = document.getElementById("nameField");
    const OUTPUT = document.getElementById("shopping");
    const SHOP_FIELD = document.getElementById("shoppingField");
    if (/\d/.test(NAME_FIELD.value)) {
        alert("Name cannot contain numbers");
        return false;
    }
    shoppingArray.push(SHOP_FIELD.value);
    OUTPUT.innerHTML = "";
    for (let i = 0; i < shoppingArray.length; i++) {
        OUTPUT.innerHTML += "Item " + (i + 1) + ": " + shoppingArray[i] + ". <br>";
    }
}


function runProgram() {
   if (getFormInput() === false) {
    return;
   }
   if (calculatePay() === false) {
    return;
   }
   if (chooseOpinion() === false) {
    return;
   }
   if (shoppingList() === false) {
    return;
   }
    

}

/* Paste your code from the last task */