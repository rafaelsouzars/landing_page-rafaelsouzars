//import React from 'react'
//import Card from './Card.jsx'
import profileImg from '../../assets/img/profile_photo.jpg'
import { Button, SocialButton } from '../index.jsx'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
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
          Gosto de participar de projetos desde o <span className='font-size highlight'>levantamento de requisitos</span> até o <span className='font-size highlight'>desenvolvimento</span>.
        </p>
      </div>
      <div className='contact'>
        <Button className='secondary-button'>Contate-me</Button>        
      </div>
      <div className='social'>
        <SocialButton to='https://github.com/rafaelsouzars'>
          <FaGithub/>
        </SocialButton>
        <SocialButton to='https://linkedin.com/in/rafaelsouzars'>
          <FaLinkedin/>
        </SocialButton>
        <SocialButton to='https://instagram.com/rafaelsouzars.dev'>
          <FaInstagram/>
        </SocialButton>
      </div>
      
      {children}
    </section>
  )
}

export default CardProfile