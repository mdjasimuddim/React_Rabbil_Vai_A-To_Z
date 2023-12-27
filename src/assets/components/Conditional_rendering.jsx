import React from 'react'

const Conditional_rendering = () => {
  let isLoggedIn = true;
  let marks = 60;
  let items = ['A', 'B', 'C', 'D'];
  return (
    <div className='container mx-auto'>
      <h1>This is our functional component</h1>
      <h2>What time is it ? {new Date().getTime()}</h2>
      {
        (()=>{
          if(marks>=90){
            return <h1>You are really Briliant Student</h1>
          }else{
            return <h1>You have to increase your talent level.</h1>
          }
        })()
      }
      <div>
        <select>
          {
            items.map((item, index)=>{
              return <option key={index.toString()}>{item}</option>
            })
          }
        </select>
      </div>
      {isLoggedIn && <button>LoggedOut</button>}
    </div>
  )
}

export default Conditional_rendering

//for and while loop - block of code exectued
//forEach - no return or undefind