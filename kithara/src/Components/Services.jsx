import React from 'react'
import {default as Coding} from '../assets/coding-coffee.png'

const Services = () => {
  return (
    <div id='services' className='services section'>
      <img src={Coding} loading='lazy' alt='about-header-img' />
      <h2>Services</h2>
    </div>
  )
}

export default Services