import React from 'react'
import {BsLinkedin, BsGithub, BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/julian-grimler-a543a0250/" target="_blank"> <BsLinkedin/> </a>
        <a href="https://github.com/nixiz0" target="_blank"> <BsGithub/> </a>
        <a href="https://www.youtube.com/channel/UCHvAE1TxZENLhmLb3ZJ9k6g" target="_blank"> <BsYoutube/> </a>
    </div>
  )
}

export default HeaderSocials