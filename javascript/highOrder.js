//Higher Order functions -> a function where we pass a set of desire elements in callbacks and according to the desire elements or
//set of instructions we get our desired results

//map

let arr = [1,2,3,4,5]

let newArr = arr.map(function(x){ //taking function as a parameter
    return x * x;
})

console.log(arr);
console.log(newArr);

//filter

let filteredArr = arr.filter(function(x){
    return x % 2 == 0;
})
console.log(arr);
console.log(filteredArr);

//reduce -> SINGLE VALUE ELEMENT HE OUTPUT PE RETURN KAREGE

let sumArr = arr.reduce(function(sum, x){
  return sum + x;
}, 0) //paasing sum = 0 

console.log(sumArr)