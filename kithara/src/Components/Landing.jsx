import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Landing = () => {
  return (
    <div className='landing'>
      <Container>
        <Row>
          <Col>
            <h1><b>Technical Consulting</b> for <b>Small Businesses</b> across North America,</h1>
            <p>specialising in <b>technical implementation, ideation</b> and <b>UI/UX</b> to design, build and launch products.</p>
          </Col>
          <Col>
            <img src='https://via.placeholder.com/350' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing