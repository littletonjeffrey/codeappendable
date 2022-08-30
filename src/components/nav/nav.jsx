import React from 'react'
//connect individual style sheet
import './nav.css'
// importing icons for nav bar
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiSuitcaseLine} from 'react-icons/ri'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {FiMessageSquare} from 'react-icons/fi'

const nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><RiSuitcaseLine /></a>
      <a href='#services'><HiOutlineDesktopComputer /></a>
      <a href='#contact'><FiMessageSquare /></a>
    </nav>
  )
}

export default nav