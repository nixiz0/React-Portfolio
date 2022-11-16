import React from 'react'
import './about.css'
import me from '../../assets/me_about.png'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id="about">
      <h5> Pour me connaître </h5>
      <h2> À propos de moi </h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={me} alt="me_about"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5> Experience </h5>
              <small> 2+ Années D'Exprience Pro </small>
            </article>

            <article className="about_card">
              <HiOutlineUsers className='about_icon'/>
              <h5> Clients </h5>
              <small> 130+ Collaborations </small>
            </article>

            <article className="about_card">
              <AiOutlineFolderOpen className='about_icon'/>
              <h5> Projets </h5>
              <small> 50+ Projets Réalisés </small>
            </article>
          </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et 
          voluptas neque facere vel placeat provident tempore sint quis esse.
        </p>

          <a href="#contact" className='btn btn-primary'> Me Contacter </a>
        </div>
      </div>
    </section>
  )
}

export default about