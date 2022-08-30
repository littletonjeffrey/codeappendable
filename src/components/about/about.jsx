import React from 'react'
//connect individual style sheet
import './about.css'
//import image for aboutme
import ME from '../../assets/upwardlook.jpg'
//import icons for aboutme
import {RiHeartsFill} from 'react-icons/ri'
import {FaDiceD20} from 'react-icons/fa'
import {GiBookCover} from 'react-icons/gi'

const about = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

     <div className = 'container about_container'>
       <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt='photo of Jeffrey' />
          </div>
       </div>
       <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <RiHeartsFill className='about_icon'/>
            <h5>Family</h5>
            <small>Happy husband and father</small>
          </article>
          <article className='about_card'>
            <FaDiceD20 className='about_icon'/>
            <h5>Hobbies</h5>
            <small>D+D, Board Games, Painting</small>
          </article>
          <article className='about_card'>
            <GiBookCover className='about_icon'/>
            <h5>Currently Reading</h5>
            <small>The Priory of the Orange Tree</small>
          </article>
        </div>
       </div>
     </div>
    </section>
  )
}

export default about