import React from 'react'
import Project from './Project'
import '../projects.css'
import {default as Connecting} from '../assets/connecting.png'
import {default as Gabbie} from '../assets/gabbie-logo.svg'
import {default as PropTerra} from '../assets/propterra.svg'
import {default as Wideman} from '../assets/wideman.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects section'>
        <img src={Connecting} loading='lazy' alt='about-header-img' />
        <h2>Notable Projects</h2>
        <div className='project-grid'>
            <Project
                bgClass='gabbie'
                logo={Gabbie}
                text='Vote for Gabbie on Nov 8th!'
                link='https://www.gabbiemilch.com/'
            />
            <Project
                bgClass='propterra' 
                logo={PropTerra} 
                text='Commercial real estate, modernized.' 
                link='https://www.propterra.io'
            />
            <Project 
                bgClass='wideman'
                logo={Wideman}
                text='' 
                link='https://www.widemanllc.com'
            />
        </div>
    </div>
  )
}

export default Projects