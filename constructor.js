function car (brand, model, color){
    this.brand = brand;
    this.model = model;   //within a function this returns a global object 
    this.color = color;

    this.drive = function(){
        console.log("I am driving " + this.model)
    }
}

let car1 = new car("BMW", "X-5", "White")// agar aap car ko as a function bana rahe ho aur usme "new" keyword lagate ho
//tab "this" keyword joh hai woh empty object return karega i.e this -> {}
car1.brand = "Jaguar"
console.log(car1);
console.log(car1.model);
car1.drive();

