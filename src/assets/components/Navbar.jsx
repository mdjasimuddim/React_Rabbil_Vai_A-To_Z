import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mx-auto'>
        <ul className='flex items-center justify-between'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to = "/product">Product</Link>
            </li>
            <li>
              <Link to= "/profile">Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar