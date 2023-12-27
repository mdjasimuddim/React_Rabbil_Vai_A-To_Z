import React, { useState } from 'react'

const FormHandler = () => {
    let [FormValue, setFormValue] = useState({
        fname:"",
        lname:"",
        city:"",
        gender:""
    })

    const inputChange = (inputName, inputValue) => {
        setFormValue((prevValue)=>({
            ...prevValue,
            [inputName]:inputValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert( JSON.stringify(FormValue))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='First Name' onChange={(e)=> inputChange('fname', e.target.value)} value={FormValue.fname} type='text' /> <br /><br />
            <input placeholder='Last Name' onChange={(e)=> inputChange('lname', e.target.value)} value={FormValue.lname} type='text' /> <br /><br />
            <select value={FormValue.city} onChange={(e)=> inputChange('city', e.target.value)}>
                <option>Select City</option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
            </select> <br /><br />
            <input checked = {FormValue.gender === "Male"} onChange={(e)=> inputChange('gender', 'Male')} type="radio" /> Male 
            <input checked = {FormValue.gender === "Female"} onChange={(e)=> inputChange('gender', 'Female')} type="radio" /> Female
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormHandler