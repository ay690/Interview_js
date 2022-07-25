//impure function

// let a = 10;

// function sum(b){
//     console.log("the result is ", a + b);
// }

// sum(3);
// sum(3);

//Above you can see we are passing the arguments in function but we end up getting differnt result
//this is because of the external factor variable a 
//and our function should never depend on the external factor  
//Such function is know is Impure function



//pure functions -. this is always recommended in functional programming

function sum(a, b){
    //console.log("the result is ", a + b); //this console is side effect
    return a + b;
}

//sum(2, 3);
console.log(sum(2, 3));

//so ek aisa function jisko aap same arguments pass on kar rahe ho will give you the same answer agar (2,3) pass karoge toh aapko same answer he milega i.e 5
//or it is a function that will return the same set of result when passing the same set of arguments
//not depending on external factors

//this console in function is side effect
//functional programme tells us that our state should be mutable meaning:
//Agar function ke andar changes ho rahe ho toh function ke bahar joh bhi ho usme changes nahi aane chahiye
//console joh hai humari ext.screen ko use kar raha hai humare result ka output batane ke liye
//Toh uss function ka reach sirf function ke andar nahi raha usne ek external factor(ext.screen) mein mutate(change) kar diya
//to avoid this side effect use return inside function
//and joh console karoge woh funcion ke scope ke bahar karna