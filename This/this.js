//this keyword in node non-strict mode

//1. globally this
// console.log(this)//return an empty object

//2. function ke andar console log karo "this"
// function showThis(){
//     console.log(this); //returns a global object
// }
// showThis();

//3. object ke function mein "this"
// let obj ={
//     naam: "Ani",
//     f : function(){
//         console.log(this); //returns the object itself
//     }
// }
// obj.f();


//4. object ke function ke function ke andar "this"

// let obj = {
//     naam: "Ani",
//     f : function(){
//         function g(){
//         console.log(this); //returns the global object 
//         }
//         g();
//     }
// }
// obj.f();

//...........................................................................................................


//this keyword in node strict mode

"use strict"  //use this while using strict mode in node.js

//1. globally this
// console.log(this)//return an empty object

//2. function ke andar console log karo "this"
// function showThis(){
//     console.log(this); // returns undefined
// }
// showThis();

//3. object ke function mein "this"
// let obj ={
//     naam: "Ani",
//     f : function(){
//         console.log(this); //returns the object itself
//     }
// }
// obj.f();


//4. object ke function ke function ke andar "this"
let obj ={
    naam: "Ani",
    f : function(){
        function g(){
        console.log(this); //returns undefined 
        }
        g();
    }
}

obj.f();