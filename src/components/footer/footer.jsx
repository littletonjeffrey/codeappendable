import React from 'react'
//connect individual style sheet
import './footer.css'
//icons for links
import { IconContext } from 'react-icons'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Code@ppendable</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
      <IconContext.Provider value={{size: 28}}>
        <a href="https://linkedin.com/in/littleton-jeffrey"><BsLinkedin/></a>
        <a href="https://github.com/littletonjeffrey"><FaGithub/></a>
        <a href="https://dribbble.com/littletonjeffrey"><FiDribbble/></a>
        </IconContext.Provider>
      </div>

      <div className="footer_copyright">
        <small>&copy; Code@ppendable and Jeffrey Littleton.  All rights reserved. </small>
      </div>
    </footer>
  )
}

export default footer