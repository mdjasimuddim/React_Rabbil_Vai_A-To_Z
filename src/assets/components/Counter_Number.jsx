import React, { useState } from 'react'

const Counter_Number = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button className = "bg-blue-500 px-10 py-2 rounded-lg" onClick={()=> setNumber(number+1)}>Inc. Number</button>
    </div>
  )
}

export default Counter_Number