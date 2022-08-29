import React from 'react'
// import resume file to use in a href
import resume from '../../assets/LittletonJResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download>Download Resume</a>
        <a href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA