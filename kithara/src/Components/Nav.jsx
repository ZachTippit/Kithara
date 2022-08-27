import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Nav = () => {
  return (
    <div id='Nav'>
        <Container fluid id='NavGrid'>
            {/* In Row on Desktop, Stacked in Mobile */}
            <Row>
                <Col xs>
                    <button className='navButton' href='https://www.kithara.dev'>kithara.dev</button></Col>
                <Col xs className='header__right'>
                    <button className='navButton'>About</button>
                    <button className='navButton'>Service</button>
                    <button className='navButton'>Projects</button>
                    <button className='navButton'>Contact</button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Nav