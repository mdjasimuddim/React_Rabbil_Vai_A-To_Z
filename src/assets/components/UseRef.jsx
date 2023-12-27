import React, { useRef } from 'react'

const UseRef = () => {
    let myHeadLine = useRef();
    const change = () =>{
         myHeadLine.innerText = "hello world";
    }
  return (
    <div>
        <h1 ref={(h1)=>myHeadLine = h1}></h1>
        <button onClick={change}>change</button>
    </div>
  )
}

export default UseRef