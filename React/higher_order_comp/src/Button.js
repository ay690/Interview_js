import React from 'react'
import HOC from './HOC'

function Button(props) {
  return (
    <div style={props.style} >
        Hello....
    </div>
  )
}

export default HOC(Button);

//So hoc -> higher order component
//it is a component which do some changes according to the arguments conditions or props and return its modified component