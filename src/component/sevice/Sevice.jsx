import React from 'react'
import'./sevice.css'
import {BiCheck} from 'react-icons/bi'

const Sevice = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
     


      <article className='service'>
      <div className="service__head">
        <h3>Web Devlopment</h3>

        </div>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p>Develop and design and fix bugs and upgrade laravel websites</p>
        </li>
      </ul>
    
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p>Develop and design   your website using Wordpress</p>
        </li>
      </ul>
   
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p> Edit html and css on your webpage</p>
        </li>
      </ul>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p> Develop and design a java EE  website for you</p>
        </li>
      </ul>
      
      </article>


      <article className='service'>
      <div className="service__head">
        <h3>Content Creation</h3>

        </div>
      <ul className='service__list'>
        <li ><BiCheck className='service__list-icon'/>
        <p> Create and build laravel website from scratch</p>
        </li>
      </ul>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p> Create and build Wordpress website from scratch</p>
        </li>
      </ul>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p> Create and build React.js website from scratch</p>
        </li>
      </ul>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p> Create and build HTML CSS JAVA SCRIPT website from scratch</p>
        </li>
      </ul>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p> Create and build Java EE website from scratch</p>
        </li>
      </ul>
     
      
      </article>



      </div>
    </section>
  )
}

export default Sevice