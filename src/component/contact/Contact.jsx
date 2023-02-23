import React from 'react'
import'./contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import{BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zs728tb', 'template_oix48po', form.current, 'fIIteN1ibhTjwl2xa')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="conatct__option">
            <AiOutlineMail className='contact__icons'/>
            <h4>Email</h4>
            <h5>mehdi.moudaa2100@gmail.com</h5>
            <a href="mailto:mehdi.moudaa2100@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="conatct__option">
            <BsWhatsapp className='contact__icons'/>
            <h4>WhatsApp</h4>
            <h5>+213797218813</h5>
            <a href="https://api.whatsapp.com/send?phone=+213797218813" target="_blank">Send a message </a>
          </article>

         
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message ' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact