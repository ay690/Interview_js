import React from 'react'
//import Button from './Button';

const styles ={
    dark:{
        background: 'black',
        color: 'red'
    }
}

function HOC(wrappedComp) {
  return function(args){
     let temp = {};
     if(args.dark){
     temp = {...styles.dark} 
    }

   let obj = {...args, style: temp};
   return<wrappedComp {...obj} />
  } 

}

export default HOC