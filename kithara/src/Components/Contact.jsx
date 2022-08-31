import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Contact = () => {
  return (
    <div className='contact section'>
      <h2>Stay Connected</h2>
      <p>Starting a <span className='accented'>new business</span> or run an <span className='accented'>interesting non-profit</span> you need technical help with? Let's chat!</p>
      <p>Open to <b>contract work</b>, recurring retainer-based <b>IT services</b>, and on a <b>project-to-project basis</b>.</p>
      <Container>
        <Row>
          {/* Socials */}
          <Col>       
            <a aria-label='linked in' href='https://www.linkedin.com/in/zachtippit' rel='noopener noreferrer' target='_blank'>
              <i></i>
            </a>
          </Col>
          {/* email address */}
          <Col>       
            <a href='contact@kithara.dev'></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact