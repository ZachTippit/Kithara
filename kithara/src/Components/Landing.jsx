import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Player } from '@lottiefiles/react-lottie-player';
import {Link, animateScroll as scroll} from 'react-scroll';
import manCoding from '../assets/manCoding.json'

const offset = -70
const duration = 500

const Landing = () => {
  return (
    <div id='landing' className='landing section'>
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
        <Row className='connectButtonContainer'>
          <Col>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
              className='connectButton'
            >
              Let's Connect!
            </Link>      
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing