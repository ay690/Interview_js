//Function currying with bind method ft.closure

// function add(a, b){
//     console.log(a + b);
// }

// add(2,5);  //7

// function add(a, b){
//     console.log(a + b);
// }

// // let addwith2 = add.bind(this, 2);  //here "this" refers to "add" function and "2" is "a"
// // addwith2(5);// output -> 7

// //...........or.....
// // let addwith2 = add.bind(this);
// // addwith2(2,5); //o/p -> 7

// //.........or..........
// let addwith2 = add.bind(this, 2, 5);
// addwith2(); //o/p -> 7


//..............currying via closures...................../

function add(x){
    return function(y){
        console.log(x + y);
    }
}

 let addwith2 = add(2);
 addwith2(5); //o/p -> 7
