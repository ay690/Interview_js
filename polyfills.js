// Array.prototype.myFunc = function(){ //we have created a function in browser with the help of protoype 
//     console.log(this);
// }

// let arr = [1,3,4,6];

// arr.myFunc();


//Map Polyfill
//map -> yeh ek new arr return karta hai bina old ko cheddh-chaadh kiye

// Array.prototype.myMap = function(cb){  //cb -> callback or our set of instructions which is sqaured() function
//  let newArr = [];

//  for(let i = 0; i < this.length; i++){
//     newArr.push(cb(this[i])); //or squared(this[i])
//  }
//  return newArr
// }

// function squared(x){
//     return x * x;
// }

// let arr = [1,3,4,6];

// let mapArr = arr.myMap(squared);
// console.log(mapArr);


//filter polyfill

// Array.prototype.myFilter = function(cb){  //cb -> callback or our set of instructions which is sqaured() function
//     let newArr = [];
   
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i]))
//        newArr.push(this[i]);
//     }
//     return newArr
//    }
   
//    function isEven(x){
//        return x % 2 == 0;
//    }
   
//    let arr = [1,3,4,6];
   
//    let filterArr = arr.myFilter(isEven);
//    console.log(filterArr);

   //reduce polyfill

   Array.prototype.myreduce = function(cb){
    let sum = 0;

    for(let i = 0; i < this.length; i++){
        sum += cb(this[i]);
    }
    return sum;
   }
  
   function elements(x){
    return x;
   }

   let arr = [1,3,4,6];
   
   let sumArray = arr.myreduce(elements);
   console.log(sumArray);


   //Prototype -> iske wajah se kaafi saare functions predefined hote hai in array(eg:- map, filter, reduce, etc) or anything in browser 
   //but agar dusra koi browser use kar rahe ho jaise chrome, mozilla firefox, internet explorer etc. aur aap eg:- map filter reduce jaise keywords
   //use karna chahoge aise browser mien joh firefox aur internet explorer mein nahi hai but still you want to use those functions
   //this is where pollyfills comes handy and you can add your pollyfills(functions) in your prototyope and use it
