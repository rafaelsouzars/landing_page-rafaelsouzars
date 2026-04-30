//import React from 'react'
//import Card from './Card.jsx'
import profileImg from '../../assets/img/profile_photo.jpg'
import './Card.css'

const CardProfile = ({ photo, children }) => {
  return (
    <div className='profile'>
      <figure>
        <img className='photo' src={photo ?? profileImg} alt='Profile photo rafaelsouzars'/>
      </figure>
      <figcaption className='caption'>
        Rafael Souza
      </figcaption>
      <div className='release'>
        Release
      </div>
      <div className='contact'>
        Contact
      </div>
      
      {children}
    </div>
  )
}

export default CardProfile