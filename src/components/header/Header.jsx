import React from 'react'
import './header.css'
import Download from './Download'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Bonjour Je suis </h5>
        <h1> Initium </h1>
        <h5 className="text-light"> Fullstack Developper </h5>
        <Download />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="photo_of_me"/>
        </div>

        <a href="#contact" className='scroll_down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default header