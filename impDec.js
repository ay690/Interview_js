//Imperative code and declatrative code

//if the squared number is even or not
//1.Imperative -> this focuses on how to go about a problem
// const x = 5;
// const isSquaring = x * x;

// let isEven;

// if(isSquaring % 2 == 0){
//     isEven = true;
// }else{
//     isEven = false;
// }
// console.log(isEven)


//Declarative -> this speaks about what is a problem and give the solution immediately

const isSquareEven = (x) => ((x * x) % 2 === 0 ? true : false)
console.log(isSquareEven(5));
//here isSquareEven ko aap as a function bhi call kar sakte ho reason stated below in Note

//Note:- functions in js is "first class citizen" kyuki js variable and function mein koi bhed-bhaav nahi karta
//matlab aap jiss tarike se function likh rahe ho ussi tarike se function ko as a variable bhi likh de jisse js ko problem nahi hoti