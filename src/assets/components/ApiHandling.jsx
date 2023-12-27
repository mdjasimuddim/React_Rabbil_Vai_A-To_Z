import React, { useEffect, useState } from 'react'

const ApiHandling = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(json => setData(json))
    },[])
  return (
    <div>
        {
            JSON.stringify(data)
        }
    </div>
  )
}

export default ApiHandling