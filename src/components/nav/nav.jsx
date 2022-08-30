import React from 'react'
//connect individual style sheet
import './nav.css'
// importing icons for nav bar
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiSuitcaseLine} from 'react-icons/ri'
import {FaLaptopCode} from 'react-icons/fa'
import {FiMessageSquare} from 'react-icons/fi'
// import the useState hook for dynamic active selection on navbar buttons
import { useState } from 'react';

const Nav = () => {
  // variable for active button on navbar
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiSuitcaseLine /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaLaptopCode /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageSquare /></a>
    </nav>
  )
}

export default Nav