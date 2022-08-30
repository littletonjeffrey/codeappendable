import React from 'react'
//connect individual style sheet
import './testimonials.css'
//avatar images
import JR from '../../assets/jaden.png'
import WP from '../../assets/william.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Word of Mouth</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="avatar">
            <a href='https://missatrox44.github.io/portfolio' target='blank'><img src ="https://ca.slack-edge.com/T03ENUM2YP6-U03KJS6TT40-a81aac4951bc-512" /></a>
          </div>
          <a href='https://missatrox44.github.io/portfolio' target='blank'><h5>Sara Baqla</h5></a>
          <small className="review">"Jeffrey has a great eye for UI/UX design and thrives in front end development. His knowledge as a full-stack developer is exceptional and he is an incredible asset to any team. I look forward to our future collaborations!"</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="avatar">
            <a href='https://www.jadent.dev/' target='blank'><img src ={JR} /></a>
          </div> 
          <a href='https://www.jadent.dev/' target='blank'><h5>Jaden Rodriguez</h5></a>
          <small className="review">"Jeffrey is an amazing developer, who is always finding solutions to his problems, while eager to help you with yours. Its honestly amazing to see how fast he went from learning how to create an image tag, to being able to code a full stack application."</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="avatar">
            <img src ={WP}/>
          </div>
          <h5>William Pollock</h5>
          <small className="review">"Jeffrey is a natural people leader.  He has a tremendous drive for achievement that is only rivaled by his wanting to help others succeed."</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="avatar">
            <a href='https://missatrox44.github.io/portfolio' target='blank'><img src ="https://ca.slack-edge.com/T03ENUM2YP6-U03KJS6TT40-a81aac4951bc-512" /></a>
          </div>
          <a href='https://missatrox44.github.io/portfolio' target='blank'><h5>Sara Baqla</h5></a>
          <small className="review">Jeffrey has a great eye for UI/UX design and thrives in front end development. His knowledge as a full-stack developer is exceptional and he is an incredible asset to any team. I look forward to our future collaborations!</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials