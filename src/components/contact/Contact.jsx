import React from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const contact = () => {
  return (
    <section id="contact">
      <h5> Contact </h5>
      <h2> Me Contacter </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option_icon'/>
            <h4> Email </h4>
            <h5> email@gmail.com </h5>
            <a href="mailto:email@gmail.com" target="_blank"> Envoyer un email </a>
          </article>
          <article className="contact_option">
            <BsTwitter className='contact_option_icon'/>
            <h4> Twitter </h4>
            <h5> @initiumJG </h5>
            <a href="https://twitter.com/initiumJG" target="_blank"> Parler sur Twitter </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className='contact_option_icon'/>
            <h4> Linkedin </h4>
            <h5> Mon linkedin </h5>
            <a href="https://www.linkedin.com/feed/" target="_blank"> Discuter sur Linkedin </a>
          </article>
        </div>
          <form name="myForm" method="post" netlify data-netlify="true">
            <input type="text" name="name" placeholder='Nom & Prénom' required/>
            <input type="email" name="email" placeholder='Email' required/>
            <textarea name="message" row="7" placeholder='Votre message' required></textarea>
            <button type="submit" className='btn btn-primary'> Envoyer </button>
          </form>
      </div>
    </section>
  )
}

export default contact