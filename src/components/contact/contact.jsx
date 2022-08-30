import React from 'react'
//connect individual style sheet
import './contact.css'
//icons for contacting
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

const contact = () => {
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact_container">
       <div className="contact_options">
         <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/> 
           <h4>Email</h4>
           <h5>littletonjeffrey@gmail.com</h5>
           <a href="mailto:littletonjeffrey@gmail.com" target="_blank">Send a message</a>
         </article>
         <article className="contact_option">
          <RiMessengerLine className='contact_option-icon'/> 
           <h4>Messenger</h4>
           <h5>@jeffrey.littleton.5</h5>
           <a href="https://m.me/jeffrey.littleton.5" target="_blank">Send a message</a>
         </article>
         <article className="contact_option">
         <RiMessengerLine className='contact_option-icon'/>
           <h4>WhatsApp</h4>
           <h5>+123456789</h5>
           <a href="https://api.whatsapp.com/send?phone+5127911783" target="_blank">Send a message</a>
         </article>
       </div>
       {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
     </div>
    </section>
  )
}

export default contact