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

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={IMG1} alt="Neon logo with two martini glasses" />
                </div>
                <div class="flip-box-back">
                  <h2>Contributions:</h2>
                  <ul>
                    <li>Design Concept</li>
                    <li>UI/UX</li>
                    <li>Frontend Development</li>
                    <li>Backend Routing Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
              <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={IMG1} alt="Neon logo with two martini glasses" />
                </div>
                <div class="flip-box-back">
                  <h2>Contributions:</h2>
                  <ul>
                    <li>Design Concept</li>
                    <li>UI/UX</li>
                    <li>Frontend Development</li>
                    <li>Backend Routing Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
              <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={IMG1} alt="Neon logo with two martini glasses" />
                </div>
                <div class="flip-box-back">
                  <h2>Contributions:</h2>
                  <ul>
                    <li>Design Concept</li>
                    <li>UI/UX</li>
                    <li>Frontend Development</li>
                    <li>Backend Routing Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
              <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={IMG1} alt="Neon logo with two martini glasses" />
                </div>
                <div class="flip-box-back">
                  <h2>Contributions:</h2>
                  <ul>
                    <li>Design Concept</li>
                    <li>UI/UX</li>
                    <li>Frontend Development</li>
                    <li>Backend Routing Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
              <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={IMG1} alt="Neon logo with two martini glasses" />
                </div>
                <div class="flip-box-back">
                  <h2>Contributions:</h2>
                  <ul>
                    <li>Design Concept</li>
                    <li>UI/UX</li>
                    <li>Frontend Development</li>
                    <li>Backend Routing Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
              <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={IMG1} alt="Neon logo with two martini glasses" />
                </div>
                <div class="flip-box-back">
                  <h2>Contributions:</h2>
                  <ul>
                    <li>Design Concept</li>
                    <li>UI/UX</li>
                    <li>Frontend Development</li>
                    <li>Backend Routing Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <h3>Mix It Up: Cocktail Recipe Database</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/sergeyholin/Mix-It-Up" className='btn' target='blank'>Github</a>
              <a href="https://adadlaldalkmdlka.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
        </article>
      </div>
      </section>
  )
}

export default portfolio