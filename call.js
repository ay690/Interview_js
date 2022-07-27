// let person1 = {
//     name: "abc",
//     age: 20,

//     showDetails: function(){
//         console.log(this.name + " is " + this.age + " years old" ); 
//     }
// }

// let person2 = {
//     name: "steve",
//     age: 29

//     // showDetails: function(){
//     //     console.log(this.name + " is " + this.age + " years old" );
//     // }
// }

// // person1.showDetails();
// // person2.showDetails();

// //This is being repititive
// //Mujhe apne ek he object se function banake dusre objects ko call out karna hai 
// //this is where we use call function

// person1.showDetails.call(person2); //so person1 se show details use kiya and call laga rahe for person2 ke liye

//now if you see humne person2 mein showDetails waala function nahi, woh humne function person1 ke object mein rakha hai aur ussi ke through
//he humne call lagayi hai 
//This is also known as function burrowing


//...............making showDetails globally................................./

// let person1 = {
//     name: "abc",
//     age: 20,

   
// }


// let showDetails =  function(){
//     console.log(this.name + " is " + this.age + " years old" ); 
// }

// let person2 = {
//     name: "steve",
//     age: 29
// }

// showDetails.call(person2);
// showDetails.call(person1);


//...........call function with external arguments eg: car , city etc...................../

let person1 = {
    name: "abc",
    age: 20,

   
}


let showDetails =  function(car, city){
    console.log(`${this.name} is ${this.age} years old and drives ${car} lives in ${city} ` ); 
}

let person2 = {
    name: "steve",
    age: 29
}

showDetails.call(person2, "Audi-Q7", "Mumbai");
showDetails.call(person1, "BMW", "Nagpur");


//So call mein humne yeh dekha ki humme kissi object ke function ko multiple times call karna hai for other objects tab
//hume sirf uss object ka refernce pass karna padta hai i.e for this object you need to call this function(joh function humne define kiya hoga)
//aur call laga do