import React from 'react'
import Project from './Project'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {default as Connecting} from '../assets/connecting.png'

const Projects = () => {
  return (
    <div className='projects section'>
        <img src={Connecting} loading='lazy' alt='about-header-img' />
        <h2>Notable Projects</h2>
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <Project 
                        image='https://images.unsplash.com/photo-1589271755419-b813a577ad42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80' 
                        text='Website for Gabbie Milch, candidate for Seminole County Soil and Water District 3.' 
                    />
                </Col>
                <Col sm={12} md={6}>
                    <Project 
                        image='https://images.unsplash.com/photo-1514589553259-ed2658dad420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2716&q=80' 
                        text='PropTerra is a commercial real estate tech consultancy delivering best-in-class IT services.' 
                    />
                </Col>
                <Col sm={12} md={6}>
                    <Project 
                        image='https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2589&q=80'
                        text='The Wideman Company' 
                    />
                </Col>
                <Col sm={12} md={6}>
                    <Project 
                        image='https://images.unsplash.com/photo-1548668486-cac652985915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80'
                        text='E-State Mate Services' 
                    />
                </Col>
            </Row>
        </Container> 
    </div>
  )
}

export default Projects