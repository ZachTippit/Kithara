import React from 'react'
import Card from 'react-bootstrap/Card'

const Project = ({bgClass, link, logo, text}) => {
  return (
    <a className={`project ${bgClass}`} href={link}>
      <img src={logo} className='project-img' alt='img' loading='lazy' />
      <p>{text}</p>
    </a>
  )
}

export default Project