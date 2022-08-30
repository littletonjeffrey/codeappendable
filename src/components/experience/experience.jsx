import React from 'react'
//connect individual style sheet
import './experience.css'
//icons for skills
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
     <h5>Experience Has Taught Me This</h5>
     <h2>My Skills</h2>
     {/* FRONT END DEVELOPMENT */}
     <div className="container experience_container">
       <div className="experience_frontend">
         <h3>Frontend Development</h3>
         <div className='experience_content'>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>CSS</h4>
             <small className='text-light'>Experienced</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>JavaScript</h4>
             <small className='text-light'>Experienced</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>Tailwind</h4>
             <small className='text-light'>Learning</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>React</h4>
             <small className='text-light'>Intermediate</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>Bootstrap</h4>
             <small className='text-light'>Experienced</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>Materialize</h4>
             <small className='text-light'>Intermediate</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>Handlebars</h4>
             <small className='text-light'>Experienced</small>
           </article>

         </div>

       </div>
       {/* BACK END DEVELOPMENT */}
       <div className="experience_backend">
         <h3>Backend Development</h3>
         <div className='experience_content'>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>Node JS</h4>
             <small className='text-light'>Experienced</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>MySQL</h4>
             <small className='text-light'>Intermediate</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>MongoDB</h4>
             <small className='text-light'>Intermediate</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>HandleBars</h4>
             <small className='text-light'>Experienced</small>
           </article>
           <article className= 'experience_details'>
             <BsFillPatchCheckFill />
             <h4>PHP</h4>
             <small className='text-light'>Learning</small>
           </article>
         </div>
       </div>
     </div>
    </section>
  )
}

export default experience