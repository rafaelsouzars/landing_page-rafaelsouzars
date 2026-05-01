//import React from 'react'
//import Card from './Card.jsx'
import profileImg from '../../assets/img/profile_photo.jpg'
import Button from '../Button/Button.jsx'
import './Card.css'

const CardProfile = ({ photo, children }) => {
  return (
    <section className='profile'>
      <figure>
        <img className='photo' src={photo ?? profileImg} alt='Profile photo rafaelsouzars'/>
      </figure>
      <figcaption className='caption'>
        Rafael Souza
      </figcaption>
      <div className='release'>
        <p className='font-size align-left secondary-text-color'>
          Sou um desenvolvedor apaixonado por aplicações
          <span className='font-size highlight'> Web, Desktop, Browser Extensions, API, Scrapping e Engenharia Reversa</span>.
          Gosto de participar de projetos desde o levantamento de requisitos até o desenvolvimento.
        </p>
      </div>
      <div className='contact'>
        <Button className='secondary-button'>Contate-me</Button>
      </div>
      
      {children}
    </section>
  )
}

export default CardProfile