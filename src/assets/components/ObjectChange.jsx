import React, { useState } from 'react'

const ObjectChange = () => {
    const [obj, setObj] = useState({
        'key1':'value1',
        'key2' : 'value2',
        'key3' : 'value3'
    })
    const myObj = () => {
        setObj(()=>({
            ...obj,
            'key1' : 'new value1'
        }))
    }
  return (
    <div>
        <h3>{obj.key1}</h3>
        <button onClick={myObj}>Change Obj.</button>
    </div>
  )
}

export default ObjectChange