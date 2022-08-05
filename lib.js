function updateAccount(product, cb){

  setTimeout(() => {

    console.log(product + " purchased");
    cb()
  //has a security issues hence write your code in promisefied manner
   }, 2000);

}

function promiseUpdateAccount(product){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve()
    }, 2000);
  })
}

module.exports ={
    updateAccount : updateAccount,
    promiseUpdateAccount : promiseUpdateAccount
}

