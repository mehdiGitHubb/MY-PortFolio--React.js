import React from 'react'
import'./footer.css'
import{BsFacebook} from'react-icons/bs'
import{BsInstagram} from'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import{BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>MD</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service </a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="foooter__socials">
        <a href="https://www.facebook.com/mehdi.dz.ski21/"> <BsFacebook/></a>
        <a href="https://www.instagram.com/mehdi.moudda/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3Fhl%3Dfr%26__coig_login%3D1"><BsInstagram/></a>
        <a href="https://github.com/mehdiGitHubb"> <BsGithub/></a>
        <a href="https://www.linkedin.com/in/mehdi-moudda-217243267"> <BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Mehdi Moudda Portfolio .All right reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer