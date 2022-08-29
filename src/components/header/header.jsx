import React from 'react'
//connect individual style sheet
import './header.css'
//button components for resume
import CTA from './CTA'
//image for CTA
import headShot from '../../assets/headshot2.png'
//social media header component
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Jeffrey Littleton</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src= {headShot} alt="head shot of Jeffrey" />
        </div>
       
        <a href="#contact" id ='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header