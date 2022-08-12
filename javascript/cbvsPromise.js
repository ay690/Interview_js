const lib = require("./lib");

let amount = 2000;
let toCut = 200;


function chargeDebit(){
    amount = amount - toCut;
    console.log(`Remaing amount is ${amount}`);
}

//lib.updateAccount("Tv" , chargeDebit);
//o/p -> Tv purchased
//Remaing amount is 1800


let promiseObj = lib.promiseUpdateAccount("TV").then(chargeDebit);  //Remaing amount is 1800

//chargeDebit();