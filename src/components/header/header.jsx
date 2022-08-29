import React from 'react'
//connect individual style sheet
import CTA from './CTA'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Jeffrey Littleton</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default header