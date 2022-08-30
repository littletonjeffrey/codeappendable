import React from 'react'
//connect individual style sheet
import './portfolio.css'
//portfolio images
import IMG1 from '../../assets/mixituplogodark.png'
// import IMG2 from '../../assets/'
// import IMG3 from '../../assets/'
// import IMG4 from '../../assets/'
// import IMG5 from '../../assets/'
// import IMG6 from '../../assets/'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="comtainer portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Neon logo with two martini glasses" />
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
            <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Neon logo with two martini glasses" />
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
            <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Neon logo with two martini glasses" />
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
            <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Neon logo with two martini glasses" />
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
            <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Neon logo with two martini glasses" />
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
            <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Neon logo with two martini glasses" />
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
            <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>


      </div>
      </section>
  )
}

export default portfolio