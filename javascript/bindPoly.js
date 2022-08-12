//Implement bind function via polyfill

let person1 = {
    name: "abc",
    age: 20,

   
}


let showDetails =  function(city, state){
    console.log(this.name + " is " + this.age + " years old"  + " " + city +  " " + state); 
}



// let showDetailsBind =  showDetails.bind(person1, "Mumbai");
// showDetailsBind("Mh");

Function.prototype.myBind = function(...args){ //jitne bhi arguments hoge woh yeh function catch kar lega

 let obj = this
 params = args.slice(1); //yaani 0 ko hata ke baaki sab elemnts starting from 1 till end
    return function(...args2){  //bind returns a function just remember
      obj.apply(args[0], [...params, ...args2]) //since params is an array so "apply" will be used

      //rest operators of params and rest operators of args will concatinate
    }
}

let showDetailsMyBind = showDetails.myBind(person1, "Mumbai"); //arrIndex -> [0, 1]
showDetailsMyBind("Mh");