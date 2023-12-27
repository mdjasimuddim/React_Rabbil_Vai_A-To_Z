import React from 'react'

const EventHandler = () => {
    function handlerFunction(){
        alert('you have clicked the button');
    }
  return (
    <div>

        <h2>Event Handler</h2>
        <button onClick={() => {
            alert('you have clicked the button inside function');
        }}>Submit Handler</button>

    </div>
  )
}

export default EventHandler