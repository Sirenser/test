'use strict'

//let quest = confirm("suck?");

//console.log(quest);

//let quest = prompt("suck?", "yes");

//console.log(typeof(quest));

let money = +prompt("Vash bugje?");

//let time = prompt("Vvedite daty v formate YYYY-MM-DD");

let question1 = prompt("Vvedite obyazatel'nyu stat'u rashodov v etom mesyace")

let question2 = +prompt("Vo skol'ko oboidetsya?")

let appData = {
    budjet: money,
    timeData: time,
    expenses: {
      question1 : question2  
    },
    optionalExpenses: {

    },
    income: null,
    savings: false
};

alert("Budjet na 1 den' sostavit " + (budjet/appData.expenses.question2));

console.log(typeof(appData.budjet));
console.log(typeof(appData.expenses.question2));
//console.log(appData.budjet);