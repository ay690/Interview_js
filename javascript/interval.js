// function sayHi(){
//     console.log("Hiiiii");
// }

// //sayHi();
// setInterval(sayHi, 3000); //har 3 sec ke baad hii print hoga


let count = 0;
let setIntervalId;

function sayHi(){
    count++;
    console.log("Hiiiii");
    
    if(count >= 3){
       clearInterval(setIntervalId); 
    }
}

//sayHi();
setIntervalId =  setInterval(sayHi, 3000);