import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/littleton-jeffrey"><BsLinkedin/></a>
        <a href="https://github.com/littletonjeffrey"><FaGithub/></a>
        <a href="https://dribbble.com/littletonjeffrey"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials