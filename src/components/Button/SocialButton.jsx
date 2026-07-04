//import React from 'react'
import './SocialButton.css'

const SocialButton = ({ to, children }) => {
  return ( 
    <>
        <a href={to} target='_blank' rel='noopener noreferrer'>
            <button className='social-button'>            
                {children}
            </button> 
        </a>
        
    </>    
  )
}

export default SocialButton