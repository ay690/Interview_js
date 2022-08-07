let obj = {
    name:"Ani",
    age:23,

    address:{
        city:"delhi",
        pincode: 40087,
    }
}

 function flattenObj(obj, parent, res = {}){//obj, parent, res-> result empty obj

    for(let key in obj){
        let propName = parent ? parent + '_' + key : key;
        if(typeof obj[key] == 'object'){
            flattenObj(obj, propName, res);
        }else{
            res[key] = obj[key];
        }
    }
    return res;
}
// o/p ->let obj = {
//     name:"Ani",
//     age:23,
//     address_city:"delhi",
//     address_pincode: 40087,   
// }