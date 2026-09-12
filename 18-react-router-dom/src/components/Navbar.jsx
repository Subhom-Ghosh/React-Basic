import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>SUBHOM'S</h3>
        <div className='tag'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/product'>Product</Link>
        </div>

      </div>
  )
}

export default Navbar