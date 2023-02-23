import React from 'react'
import'./experience.css'
import{BsFillPatchCheckFill} from'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="contaiter experience__container">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          
        
          
          <div className="experience__content">
    
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>JAVA SCript</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Booststrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>React js</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PhotoShop</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>WordPress</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            
          </div>

        </div>

        <div className="experience__backend">
        <h3>Backend Devlopment</h3>
        <div className="experience__content">
    
        <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Laravel</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>WordPress</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>JAVA EE</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PROLOG</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP MY ADMIN</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
          </div>


        </div>


      </div>

      
    </section>
  )
}

export default Experience