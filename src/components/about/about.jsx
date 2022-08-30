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
          <div className='about_me-image'>
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

        <p>
           I'm Jeffrey, a full-stack developer with a passion for delievering <span>⭐⭐⭐⭐⭐</span> designs that are elegant and intuitive.  While the majority of my experience has been developing brand and e-commerce sites, I have also worked on a broad spectrum project types.  I'm no slouch when it comes to backend development either, as I've created multiple full-stack projects and have experience with business intelligence data management. 
        </p>
        <p>
          As a developer, I'm most driven by taking a clients' idea and making it a reality.  I don't adhere to any one style, because YOUR website should be a true representation of YOU or your brand's style and vibe.  I hope you will share your vision and allow me to help shape your digital world.
        </p>
        
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
    </section>
  )
}

export default about