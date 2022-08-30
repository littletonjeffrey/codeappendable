import React from 'react'
//connect individual style sheet
import './about.css'
//import image for aboutme
import ME from '../../assets/upwardlook.jpg'
import US from '../../assets/us.JPG'
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
          {/* <div className='about_me-image'>
            <img src={US} alt='Jeffrey and family' />
          </div> */}
       </div>
       {/* about me header cards */}
       <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <RiHeartsFill className='about_icon'/>
            <h5>Family</h5>
            <small>Happy Husband and Father</small>
          </article>
          <article className='about_card'>
            <FaDiceD20 className='about_icon'/>
            <h5>Hobbies</h5>
            <ul>
            <li><small>D&D</small></li>
            <li><small>Coding</small></li>
            <li><small>Painting</small></li> 
            </ul>
            
          </article>
          <article className='about_card'>
            <GiBookCover className='about_icon'/>
            <h5>Interests</h5>
            <ul>
            <li><small>Board Games</small></li>
            <li><small>Reading</small></li>
            <li><small>Cooking</small></li> 
            </ul>
          </article>
        </div>

        <p>
           I'm Jeffrey, a full-stack developer with a passion for delievering <span>⭐⭐⭐⭐⭐</span> designs that are elegant and intuitive.  While the majority of my experience has been developing brand and e-commerce sites, I have also worked on a broad spectrum project types.  I'm no novice when it comes to backend development either.  I've created multiple full-stack projects and have experience with BI data management. 
        </p>
        <p>
          As a developer, I'm most driven by taking a clients' idea and making it a reality.  I don't adhere to any one style, because YOUR website should be a true representation of YOU or your brand's style and vibe.  I hope you will share your vision and allow me to help shape your digital world.
        </p>
        {/* <p>When I'm not not clacking away at my keyboard, I try to spend as much time as I can with my wife Erin and our daughter Zelda.  We have a little land that they both are trying their best to fill with as many animals as possible.  I enjoy playing board games, Dungeons and Dragons, reading and cooking.</p> */}
        
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
    </section>
  )
}

export default about