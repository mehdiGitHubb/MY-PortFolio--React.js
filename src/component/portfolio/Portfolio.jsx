import React from 'react'
import'./portfolio.css'
import  IMG1 from '../../assest/home page 0.png'
import  IMG2 from '../../assest/home page.png'
import  IMG3 from '../../assest/home page 1.png'

const Portfolio = () => {
  return (
    <section id='profolio'>
      <h5>My Recent Worck</h5>
      <h2> Portfolio </h2> 
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portdolio__item-image">
            <img src={IMG1} alt="" />
            
          </div>
          <h3>
          Laravel-ecommerce-project
          </h3>
          <div className="portfolio__itemm-cta">
          <a href="https://github.com/mehdiGitHubb/laravel-ecommerce-project" className='btn' target="_blank">Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portdolio__item-image">
            <img src={IMG3} alt="" />
            
          </div>
          <h3>
          Wordpress-Ecommerce-website
          </h3>
          <div className="portfolio__itemm-cta">
          <a href="https://github.com/mehdiGitHubb/wordpress-Ecommerce-website" className='btn' target="_blank">Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portdolio__item-image">
            <img src={IMG2} alt="" />
            
          </div>
          <h3>
          Wordpress-Fast_food-website
          </h3>
          <div className="portfolio__itemm-cta">
          <a href="https://github.com/mehdiGitHubb/wordpress-Fast_food-website" className='btn' target="_blank">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio