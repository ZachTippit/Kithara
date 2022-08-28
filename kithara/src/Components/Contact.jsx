import React from 'react'
import {default as Connecting} from '../assets/connecting.png'

const Contact = () => {
  return (
    <div className='contact section'>
      <img src={Connecting} loading='lazy' alt='about-header-img' />
      <h2>Stay Connected</h2>
    </div>
  )
}

export default Contact