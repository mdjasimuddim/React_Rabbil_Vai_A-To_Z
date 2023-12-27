import React from 'react'
import Conditional_rendering from './assets/components/conditional_rendering'
import Navbar from './assets/components/Navbar'
import HeroSection from './assets/components/HeroSection'
import CategoryList from './assets/components/CategoryList'
import HandleFunction from './assets/components/HandleFunction'
import EventHandler from './assets/components/EventHandler'
import FormSubmit from './assets/components/FormSubmit'
import Counter_Number from './assets/components/Counter_Number'
import ObjectChange from './assets/components/ObjectChange'
import TodoApp from './assets/components/TodoApp'
import FormHandler from './assets/components/FormHandler'
import ApiHandling from './assets/components/ApiHandling'
import ApiCalling from './assets/components/ApiCalling'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Product from './assets/pages/Product'
import Profile from './assets/pages/Profile'

const App = () => {

  const handleClick = () => {
    alert('Button clicked');
  }

  const Item = {
    "id" : 1,
    "name" : "product 1",
    "description" : "This is the description",
    "price" : 19.99,
    "category" : "Category 1"
  }


  const logInStatus = (status) =>{
    if(status){
      return <button>LogOut Here</button>
    }else{
      return <button>LogIn Here</button>
    }
  }
  let loggedInStatus = true;
  return (
    <div className='container mx-auto'>

      {/* <Conditional_rendering />
      {logInStatus(true)}
      {loggedInStatus && <button>LogOut</button>}
      <HeroSection time = {new Date().getFullYear()} />
      <CategoryList item = {Item} />

      <HandleFunction handleClick = {handleClick} /> */}

      {/* <EventHandler />

      <FormSubmit />
      <Counter_Number />

      <ObjectChange />

      <TodoApp /> */}
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Home />}></Route>
          <Route path = "/product" element ={<Product />}  ></Route>
          <Route path = "/profile" element ={<Profile />}  ></Route>
        </Routes>
      </BrowserRouter>

      {/* <FormHandler /> */}

      {/* <ApiHandling /> */}
      {/* <ApiCalling /> */}
    </div>
  )
}

export default App