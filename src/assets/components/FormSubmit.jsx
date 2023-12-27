import React from 'react'

const FormSubmit = (e) => {
    const handleSubmit = () =>{
        e.preventDefault();
        alert('you have clicked the submit button')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input />
            <button>Send</button>
        </form>
    </div>
  )
}

export default FormSubmit