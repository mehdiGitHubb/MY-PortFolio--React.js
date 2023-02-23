import React from 'react'
import'./nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{BiMessageSquareDetail} from 'react-icons/bi'
import {BsFolderCheck} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setactiveNav('#')} className={activeNav === '#' ? 'active' :'' }><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setactiveNav('#about')} className={activeNav === '#about' ? 'active' :'' }><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' :'' }><BiBook/></a>
      <a href="#service" onClick={()=> setactiveNav('#service')} className={activeNav === '#service' ? 'active' :'' }><RiServiceLine/></a>
      <a href="#profolio" onClick={()=> setactiveNav('#profolio')} className={activeNav === '#profolio' ? 'active' :'' }><BsFolderCheck/></a>
      <a href="#contact" onClick={()=> setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' :'' }><BiMessageSquareDetail/></a>


    </nav>
  )
}

export default Nav