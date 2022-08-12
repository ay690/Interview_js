//Synchronous callbacks

// function greet(personName, age, callback, callback2){
//     let msg = "Hello " + personName;
//     let showAge = age;
//     callback(msg);
//     callback2(showAge);
// }

// function logGreet(greetings){
//     console.log(greetings);
// }
// function ageDetail(showAge){
//     console.log(showAge);
// }



// greet("Ani",24, logGreet, ageDetail);

//Async callbacks

console.log("Hello");


setTimeout(function st1(){   //st1 and st2 are callbacks
    console.log("I am st1")
}, 2000);

setTimeout(function st2(){
    console.log("I am st2");
},1000)

function sayBye(){
    console.log("Bye");
}

sayBye();

//settimeout joh hai woh node ka inbuilt function hai na ki javascript ka 
//so woh setTimeOut node API mein jaayege fir event Loop mein 
//once the main() thread in callstack is done 
//tab eventloop se sab callstack mein jaayenge and exceute hoga output