import React from 'react'

const HandleFunction = (props) => {
  return (
    <div>
        <button onClick={props.handleClick}>Submit</button>
    </div>
  )
}

export default HandleFunction