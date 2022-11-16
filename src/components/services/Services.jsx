import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const services = () => {
  return (
    <section id="services">
      <h5> Mes Offres </h5>
      <h2> Services </h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3> UX/UI Design </h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
          </ul>
        </article>

        {/* Fin de la card */}

        <article className="service">
          <div className="service_head">
            <h3> Développement Web </h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
          </ul>
        </article>

        {/* Fin de la card */}

        <article className="service">
          <div className="service_head">
            <h3> Audiovisuelle </h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <FiCheck className='service_list_icon'/>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services