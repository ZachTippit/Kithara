import React from 'react'
import {default as TechBubbles} from '../assets/tech-bubbles.png';

const Services = () => {
  return (
    <div className='services section'>
      <img src={TechBubbles} loading='lazy' alt='about-header-img' />
      <h2>Services</h2>
    </div>
  )
}

export default Services