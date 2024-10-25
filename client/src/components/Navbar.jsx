import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
       <Link to='/'>  <img className='w-32 sm:w-44' src={assets.logo} alt="" /></Link>
        <button className="bg-blue-600 text-white py-3 px-4 rounded-full flex items-center gap-4">Get Started <img src={assets.arrow_icon} alt="" /></button>
    </div>
  )
}

export default Navbar