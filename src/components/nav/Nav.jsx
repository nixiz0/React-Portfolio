import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark, BiMessageRoundedDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'



const nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#xp"><BiBookBookmark/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default nav