import React from 'react'
//connect individual style sheet
import './testimonials.css'
//avatar images
import JR from '../../assets/jaden.png'
import WP from '../../assets/william.png'

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Word of Mouth</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="avatar">
            <img src ="https://ca.slack-edge.com/T03ENUM2YP6-U03KJS6TT40-a81aac4951bc-512" />
          </div>
          <a href='https://missatrox44.github.io/portfolio'><h5>Sara Baqla</h5></a>
          <small className="review">"Jeffrey has a great eye for UI/UX design and thrives in front end development. His knowledge as a full-stack developer is exceptional and he is an incredible asset to any team. I look forward to our future collaborations!"</small>
          
        </article>
        <article className="testimonial">
          <div className="avatar">
            <img src ={JR} />
          </div> 
          <a href='https://www.jadent.dev/'><h5>Jaden Rodriguez</h5></a>
          <small className="review">"Jeffrey has a great eye for UI/UX design and thrives in front end development. His knowledge as a full-stack developer is exceptional and he is an incredible asset to any team. I look forward to our future collaborations!"</small>
        </article>
        <article className="testimonial">
          <div className="avatar">
            <img src ={WP}/>
          </div>
          <h5>William Pollock</h5>
          <small className="review">"Jeffrey is a natural people leader.  He has a tremendous drive for achievement that is only rivaled by his wanting to help others succeed."</small>
        </article>
        <article className="testimonial">
          <div className="avatar">
            <img src ="https://ca.slack-edge.com/T03ENUM2YP6-U03KJS6TT40-a81aac4951bc-512" />
          </div>
          <h5>Sara Baqla</h5>
          <small className="review">Jeffrey has a great eye for UI/UX design and thrives in front end development. His knowledge as a full-stack developer is exceptional and he is an incredible asset to any team. I look forward to our future collaborations!</small>
        </article>
      </div>
    </section>
  )
}

export default testimonials