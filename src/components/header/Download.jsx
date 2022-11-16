import React from 'react'
import CV from '../../assets/cv-Julian.png'

const Download = () => {
  return (
    <div className='cv_contact'>
        <a href={CV} download className='btn'> Télécharger CV </a>
        <a href="#contact" className='btn btn-primary'> Discutons </a>
    </div>
  )
}

export default Download