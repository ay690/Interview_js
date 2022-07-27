//Bind bhi turant output nahi dega like call and apply ki tarah 
//woh function ke andar function return karta hai
//toh usse show karne ke liye ek method banao aur usse conole karwao

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

let showDetailsBind =  showDetails.bind(person2, "Audi-Q7", "Mumbai");
//console.log(showDetailsBind); //returns a functions which bounds showDetails i.e. -> [Function: bound showDetails] 
 showDetailsBind(); // returns -> teve is 29 years old and drives Audi-Q7 lives in Mumbai 

//showDetails.bind(person1, "BMW", "Nagpur");

//Bind same as call bas usse store karna padta hai ek variable mein 
//aur jab aapki marzi ho toh aap usse call-out kar de 