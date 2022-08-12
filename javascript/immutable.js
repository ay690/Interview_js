let person1 = {
    name : 'ani',
    age : 24
}

//let person2 = person1;
//let person2 = Object.assign({}, person1)//empty object, and source object jaha se mujhe copy karwana ho
let person2 = {...person1}
person2.name = 'Steve' //by doing this person 1 name will be changed too since same refernce 

//to avoid it we will use object.assign or deep and shallow copy will be seen in next lectures
//using object.assign and spread operator(this creates a new refernce)


console.log(person1)
console.log(person2)
