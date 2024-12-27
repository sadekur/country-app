import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css";

function NavBar() {
  return (
    <>
      <nav className='navbar'>
          <NavLink className='nav-link' to="/">Home</NavLink>
          <NavLink className='nav-link' to="/about">About</NavLink>
          <NavLink className='nav-link' to="/contact">Contact</NavLink>
          <NavLink className='nav-link' to="/add-blog">Add Blog</NavLink>
          <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
      </nav>
    </>
  )
}

export default NavBar
