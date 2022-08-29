import React from 'react'
import { IconContext } from 'react-icons'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <IconContext.Provider value={{size: 42}}>
        <a href="https://linkedin.com/in/littleton-jeffrey"><BsLinkedin/></a>
        <a href="https://github.com/littletonjeffrey"><FaGithub/></a>
        <a href="https://dribbble.com/littletonjeffrey"><FiDribbble/></a>
        </IconContext.Provider>
    </div>
  )
}

export default HeaderSocials