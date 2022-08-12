// let obj = {
//     name:"Adam",
//     age: 24,
// }

// let newObj = obj;

// newObj.name = "Steve";
// console.log(obj);//{ name: 'Steve', age: 24 }
// console.log(newObj);//{ name: 'Steve', age: 24 }

//************************************************************************************************************************************ */

//Shallow copy via spread operator

// let obj = {
//     name:"Adam",
//     age: 24,
// }

// let newObj = {...obj};

// newObj.name = "Steve";
// console.log(obj);//{ name: 'Adam', age: 24 }
// console.log(newObj);//{ name: 'Steve', age: 24 }


//Deep copies

// let person = {
//     name: "Ani",
//     age: 24,
//     hobbies: ["sports", "swim", "music"]
// }

// let newPerson = JSON.parse(JSON.stringify(person));

// newPerson.age = 23;

// newPerson.hobbies[0] = "dance";

// console.log(person);//{ name: 'Ani', age: 24, hobbies: [ 'sports', 'swim', 'music' ] }
// console.log(newPerson);//{ name: 'Ani', age: 23, hobbies: [ 'dance', 'swim', 'music' ] }


//Shallow copy via object.assign()

let person = {
    name: "Ani",
    age: 24,
    hobbies: ["sports", "swim", "music"]
}

let newPerson = Object.assign({}, person); //empty object pass karo aur kiske saath copy karna hai i.e person ke saath

newPerson.age = 23;
newPerson.hobbies[0] = "dance";

//only age changes in the new person and hobbies array changes in both objects

console.log(person); //{ name: 'Ani', age: 24, hobbies: [ 'dance', 'swim', 'music' ] }
console.log(newPerson);//{ name: 'Ani', age: 23, hobbies: [ 'dance', 'swim', 'music' ] }

