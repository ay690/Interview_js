// const arr = [1, 2, 3, 4, 5];
// arr.shift(); //deletes the first element in array 

// //even though you assign "const" to arr, your refernce remains same in stack i.e arr (8k) and this 8k points to heap 
// //this shift() keyword will make changes hence it gets deleted from heap 

// //adding key value pair in array
// arr.myprop = "hello"

// //adding a method in array
// arr.print = function(){
//     console.log('added the method');
// }

// //console.log(arr);

// //so if you see the array actually behaves like an object 
// for(let key in arr){ //for-in loop
//     console.log(key, " : ", arr[key]);
// }

// arr[95] = 100;
// console.log(arr)
// console.log(arr.length)


//object building 
// let obj = {
//     nam : "Aniket",
//     lastname : "Yadav",
//     sayHi:function(){
//         console.log("Hi from " + this.nam +" " + this.lastname);
//         //note if "this" keyword is not written it will throw you a "Reference error" by saying lastname or nam is not defined
//     }
// }

// console.log(obj)
// obj.sayHi()

// for(let key in obj){
//     console.log(key, " : ", obj[key] )
// }



//functions -> it is an object haveing key value pair
//extra feature -> it has a code property(yaani joh function ke andar likha hai) and can be executed once invoked

function fn(){
    console.log("Hello from fn");
}

//creating obj
fn.prop = "property of function"

//creating a method of function
fn.myFn = function fn(){
    console.log("I am a method of a function");
}

fn()
fn.myFn()
console.log(fn.prop)

console.log(fn)


//6 primitive datatypes -> number, string, boolean, undefined, null, symbol