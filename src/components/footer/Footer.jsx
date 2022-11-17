import React from 'react'
import './footer.css'
import {BsYoutube, BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'> Initium </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.youtube.com/channel/UCHvAE1TxZENLhmLb3ZJ9k6g"><BsYoutube/></a>
        <a href="https://www.instagram.com/real_initium/"><AiOutlineInstagram/></a>
        <a href="https://www.linkedin.com/in/julian-grimler-a543a0250/"><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Initium. Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default footer