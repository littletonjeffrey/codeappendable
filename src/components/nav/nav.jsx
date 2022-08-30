import React from 'react'
//connect individual style sheet
import './nav.css'
// importing icons for nav bar
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiSuitcaseLine} from 'react-icons/ri'
import {FaLaptopCode} from 'react-icons/fa'
import {FiMessageSquare} from 'react-icons/fi'

const nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><RiSuitcaseLine /></a>
      <a href='#services'><FaLaptopCode /></a>
      <a href='#contact'><FiMessageSquare /></a>
    </nav>
  )
}

export default nav