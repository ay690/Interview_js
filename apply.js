//In apply everything from the call remains same 
//only differnce is you pass an external arguments with the help of array

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

showDetails.apply(person2, ["Audi-Q7", "Mumbai"]);
showDetails.apply(person1, ["BMW", "Nagpur"]);