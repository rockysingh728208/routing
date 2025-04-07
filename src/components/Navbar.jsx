import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Dashboard from './Dashboard'
import Param from './param'
const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-around bg-black text-white w-screen overflow-hidden p-6'>
<li>
   <NavLink to="/"className={({ isActive }) => (isActive ? "text-red-500" : "")} >Home</NavLink>
</li>
<li>
   <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-red-500" : "")}>Contact</NavLink>
</li>
<li>
   <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-red-500" : "")}>Dashboard</NavLink>
</li>
        </ul>
    </div>
  )
}

export default Navbar