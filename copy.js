// //Shallow and deep copies

// let arr = [1, 2, 3, 4];

// //let copyArr = arr;

// // copyArr[1] = 5;

// // console.log(arr); //[ 1, 5, 3, 4 ]
// // console.log(copyArr);//[ 1, 5, 3, 4 ]

// let copyArr = [...arr];

// copyArr[1] = 5

// console.log(arr);
// console.log(copyArr);

//****************************************************************************************************************************** */


//Shallow copy via spread operator 

// let sports = ['cricket', 'baseball', 'handball', {a:'hockey', b:'swiming'}]

// let copySports = [...sports];
// copySports[1] = 'Rugby'
// copySports[3]['a'] = 'kabadi' //i.e. array at index '3' and key 'a'

// console.log(sports);//[ 'cricket', 'baseball', 'handball', { a: 'kabadi', b: 'swiming' } ]
// console.log(copySports);//[ 'cricket', 'baseball', 'handball', { a: 'kabadi', b: 'swiming' } ]

//here at single level only these copies are applied but if nested comes in it changes all -> shallow copy 

//****************************************************************************************************************************** */
// //Shallow copy via Array.from()
// let sports = ['cricket', 'baseball', 'handball', {a:'hockey', b:'swiming'}]

// let copySports =Array.from(sports);
// copySports[1] = 'Rugby'
// copySports[3]['a'] = 'kabadi' //i.e. array at index '3' and key 'a'

// console.log(sports);
// console.log(copySports);  //same output as that of shallow copies one created by using Array.from() 

//********************************************************************************************************************************* */

//Shallow copy via slice

// let sports = ['cricket', 'baseball', 'handball', {a:'hockey', b:'swiming'}]

// let copySports = sports.slice(0);//0th index se copy banaega

// copySports[1] = 'Rugby'
// copySports[3]['a'] = 'kabadi' //i.e. array at index '3' and key 'a'

// console.log(sports);
// console.log(copySports);  //same output as that of shallow copies 

//********************************************************************************************************************************** */

//Deep copy via JSON.parse

let sports = ['cricket', 'baseball', 'handball', {a:'hockey', b:'swiming'}]

let str = JSON.stringify(sports);
console.log(str);//["cricket","baseball","handball",{"a":"hockey","b":"swiming"}]

let copySports = JSON.parse(str);

copySports[1] = 'Rugby'
copySports[3]['a'] = 'kabadi' //i.e. array at index '3' and key 'a'

console.log(sports);
console.log(copySports);






