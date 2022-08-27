import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='projects section'>
        <h2>My Projects</h2>
        <Project image='test' text='Website for Gabbie Milch, candidate for Seminole County Soil and Water District 3.' />
        <Project image='test' text='PropTerra is a commercial real estate tech consultancy delivering best-in-class IT services.' />
        <Project image='test' text='The Wideman Company' />
        <Project image='test' text='E-State Mate Services' />
    </div>
  )
}

export default Projects