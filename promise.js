//Create your own implementation of your promise

const Pending = 0;
const Fulfiled = 1;
const Rejected = 2;


//Promise koi function nahi 
//it is an object
//woh ek function ko execute hone ke baad
//uska output joh aayega toh promise dikhega ki accha yeh output aa chuka hai 
//Toh ab mujhe iske hissab se return karna hai either fulfiled or reject
//or if the output not shown means its still showa Pending

function customPromise(executor){ //this is a constructor function tha creates our promise
 let state = Pending;
 let value = null;
 let handlers = []; //callback function arrays
 let catchers = []; //to get errors in arrays

 function resolve(res){
    if(state != Pending){ //yaani ki woh resolve ho chuki hai
      return;
    }
    state = Fulfiled;
    value = res;
    //ab resolve function mein call backs jaayenge joh successful hai
    handlers.forEach((h) => h(value)); //means for every handlers lets just get ttheir values so we can do the chaining
 }

 function reject(err){
    if(state != Pending)return;
    
    state = Rejected;
    value = err;

    catchers.forEach((c) => c(value));//yeh nahi bhi likhe tab bhi chalega because humara catch toh ek he baar chalta hai ek baar reject 
    //hoke woh apna output he de dega
 }
  
 //ab "this" ko counstructor mein use kare toh woh empty object return karta hai 
 this.then = function(successCallback){ //then yaani ki success
   if(state == Fulfiled){ //agar fulfiled hue toh callback function chala dijiye with that value
     successCallback(value);
   }else{ //ab tak then function call nahi hua hai toh aap handler function mein push kardo apne successCallBacks ko
    handlers.push(successCallback);
   }
 }

 this.catch = function(failureCallBack){
    if(state == Rejected){
        failureCallBack(value);
    }else{
        catchers.push(failureCallBack);
    }
 }

 executor(resolve, reject);//SO YEH resolve and reject ko catch karega aur yehi humara call back hoga

}


//Now customPromise is a constructor function so
//iske through new Promises create karte hai ab

const doWork = (res, rej) => {
    if(2===1){
        setTimeout(() => {
            res("Resolved from Promise");
        }, 1000);
    }else{
        setTimeout(() => {
            rej("Promise Rejected");
        }, 1000);
    }
}

let greetMsg = new customPromise(doWork);

greetMsg.then((val)=>{
    console.log("then ka log", val)
})

greetMsg.catch((val)=>{
    console.log("catch ka log", val);
})