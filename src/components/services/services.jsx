import React from 'react'
//connect individual style sheet
import './services.css'
//icons
import {BiCheck} from 'react-icons/bi';

const services = () => {
  return (
    <section id='services'>
     <h5>What I Can Do For You</h5>
     <h2>Services</h2>
     
     <div className ='container services_container'>
       {/* Start OF UI/UX */}
       <article className="service">
         <div className="service_header">
           <h3>UI/UX Design</h3>
         </div>

         <ul className="service_list">
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
         </ul>
       </article>
      {/* END OF UI/UX */}
      {/* START OF WEB DEV */}
      <article className="service">
         <div className="service_header">
           <h3>Web Development</h3>
         </div>

         <ul className="service_list">
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
         </ul>
       </article>
      {/* END OF WEB DEV */}
      {/* START OF CONTENT CREATION */}
      <article className="service">
         <div className="service_header">
           <h3>Content Creation</h3>
         </div>

         <ul className="service_list">
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
           <li>
           <BiCheck className="service_icons" />
           <p>These are some services that I can provide</p>
           </li>
         </ul>
       </article>
      {/* END OF CONTENT CREATION */}
     </div>
    </section>
  )
}

export default services