import React from 'react'
import './xp.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const xp = () => {
  return (
    <section id="xp">
      <h5> Mes Compétences </h5>
      <h2> Mes Expériences </h2>
      
      <div className="container xp_container">
        <div className="xp_front">
          <h3> Développement Front-End </h3>
          <div className="xp_content">
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> HTML </h4>
                <small className='text-light'> Expérimenté </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> CSS </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> JavaScript </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> Bootstrap </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> Tailwind </h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> React </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
          </div>
        </div>
        <div className="xp_back">
          <h3> Développement Back-End </h3>
          <div className="xp_content">
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> PHP </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> Symfony </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> Python </h4>
                <small className='text-light'> Expérimenté </small>
              </div>
            </article>
            <article className='xp_details'>
              <BsPatchCheckFill className='xp_details_icon'/>
              <div>
                <h4> Django </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default xp