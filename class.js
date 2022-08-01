class Person{
    constructor(name, age){ 
        this.name = name;
        this.age = age;
    }
    showDetails(){
        return this.name;
    }
}

class Personchild extends Person{ //mattlab mein PersonChild bana raha aur Person obj se meri propertys le lein
    constructor(){
        super("Steve");
    }

}


// let Person1 = new Person("Adam", "23");
// console.log(Person1); //returns class object
// console.log(Person1.showDetails())//Adam

let Person1 = new Personchild();
console.log(Person1.showDetails()); //Steve