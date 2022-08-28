import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Player } from '@lottiefiles/react-lottie-player';
import manCoding from '../assets/manCoding.json'

const Landing = () => {
  return (
    <div className='landing section'>
      <Container>
        <Row>
          <Col className='landingTxt'>
            <h1><b className='accented'>Delivering results</b> for <b>Small Businesses</b> across North America,</h1>
            <p>specialising in <b className='accented'>website development, technical implementation</b> and <b className='accented'>technical guidance</b> to make key decisions in your organization.</p>
          </Col>
          <Col className="d-none d-lg-block">
            <Player src={manCoding} autoplay loop speed={0.125}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className='connectButton'>Let's Connect!</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing