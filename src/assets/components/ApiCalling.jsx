import React, { useEffect, useState } from 'react'

const ApiCalling = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        (async()=>{
            let result = await fetch('https://restcountries.com/v3.1/all');
            let res = await result.json();
            setData(res)
        })()
    },[])
  return (
    <div>
        {
            JSON.stringify(data)
        }
    </div>
  )
}

export default ApiCalling