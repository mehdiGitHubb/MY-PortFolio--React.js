import React from 'react'
import'./about.css'
import ME from '../../assest/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5> Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

       <div className="about__me">
         <div className="about__me-image">
          <img src={ME} alt="About Image" />
         </div>
       </div>

      <div className="about__content">

        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5> Experience</h5>
            <small>+1 year working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Client</h5>
            <small> </small>
          </article>

          <article className='about__card'>
            <BsFolderCheck className='about__icon'/>
            <h5> Project</h5>
            <small>+3 project</small>
          </article>

        
      </div>
        <p>
        Hello! I am mehdi. 

I am a Software Engineer and grip on Web Development.

will follow best practices of web engineering to 

make efficient website  .



I have experience of years in web development,

. I am full stack developer

and know both frontend and backend. Also, I have done  many

projects . So, if there are any issue in 

existing site or want a brand new site according to your 

need, I am here for you.
        </p>

        <a href="#contact" className='btn btn-primary'> Let's Talk </a>
      </div>
      </div>
    </section>
  )
}

export default About