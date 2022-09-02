import React from 'react'
import Project from './Project'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../projects.css'
import {default as Connecting} from '../assets/connecting.png'
import {default as Gabbie} from '../assets/gabbie-text.svg'
import {default as PropTerra} from '../assets/propterra.svg'
import {default as Wideman} from '../assets/wideman.svg'

const Projects = () => {
  return (
    <div className='projects section'>
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
            {/* <Project 
                image='https://images.unsplash.com/photo-1548668486-cac652985915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80'
                text='E-State Mate Services' 
                link='https://www.estatemateservices.com'
            /> */}
        </div>
    </div>
  )
}

export default Projects