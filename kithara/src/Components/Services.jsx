import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link, animateScroll as scroll} from 'react-scroll';
import { Player } from '@lottiefiles/react-lottie-player'
import {default as Coding} from '../assets/coding-coffee.png'
import {default as CodingLottie} from '../assets/coding.json'
import {default as Consulting} from '../assets/consulting.json'
import {default as Google} from '../assets/google.json'
import {default as services} from '../assets/services.png'
import {default as downChevron} from '../assets/chevron-down.svg';

const offset = -100
const duration = 500

const Services = () => {
  return (
    <div id='services' className='services section'>
      <img src={Coding} loading='lazy' alt='service-header-img'/>
      <div className='section-txt-header'>
        <img src={services} alt='services-header-icon' />
        <h2>Our Services</h2>
      </div>
      <p>Kithara specializes in working with small businesses that are either in the early incorporating stages or hasn't had a traditional focus on technology in the past. We seek to eliminate technical debt and picking user-friendly, easy to action tools. By partnering with Kithara, you will also receive training in many of the technologies that we provide so that you can administer them within your own organization as well.</p>
      <Link
        activeClass="active"
        to="consulting"
        spy={true}
        smooth={true}
        offset={offset}
        duration={duration}
        className='next-service'
      >
        <img src={downChevron} className='pulsate-fwd' alt='next-item' />
      </Link>
      <Container>
        <Row className='service' id='consulting'>
          <Col xs={12} md={4}>
            <Player src={Consulting} autoplay loop={false} keepLastFrame speed={0.875}/>
          </Col>
          <Col xs={12} md={8} className='service-description'>
            <h3>Find the right platforms for the job.</h3>
            <p>Avoid technical debt early by finding the right technical tools for the job. Don't fall for all of the marketing jargon from every option that is out there and focus on the platforms that make your business soar! Kithara will understand your business and guide you through that technical journey.</p>
          </Col>
          <Col className='d-md-none d-sm-none'>
            <Link
              activeClass="active"
              to="webdev"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
              className='next-service'
            >
              <img src={downChevron} className='pulsate-fwd' alt='next-item' />
            </Link>
          </Col>
        </Row>
        <Row className='service' id='webdev'>
        <Col xs={{span: 12, order: 0}} md={{span: 4, order: 1}}>
            <Player src={CodingLottie} autoplay loop speed={0.375}/>
          </Col>
          <Col xs={{span: 12, order: 0}} md={{span: 8, order: 0}} className='service-description'>
            <h3>Web/App Development & Tool Integration</h3>
            <p>After locking down the needed tools, we will build the rest of the capabilities that your organization needs. Whether that be a website, platform, app or integration, we've got you covered.</p>
          </Col>
          <Col className='d-md-none d-sm-none'>
            <Link
              activeClass="active"
              to="google"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
              className='next-service'
            >
              <img src={downChevron} className='pulsate-fwd' alt='next-item' />
            </Link>
          </Col>
        </Row>
        <Row className='service' id='google'>
          <Col xs={12} md={4}>
            <Player src={Google} autoplay loop={false} keepLastFrame speed={0.375}/>
          </Col>
          <Col xs={12} md={8} className='service-description'>
            <h3>Google Technology Administration</h3>
            <p>Along with monitoring and setting up Google Analytics, Kithara also specializes in the rest of the Google tech stack. Using Google Workspace as your company's productivity suite, migrating your data on to Google Cloud Platform or managing your existing Cloud resources, Kithara can help you get the most out of the resources you are already paying for.</p>
          </Col>
          <Col className='d-md-none d-sm-none'>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={offset * 2}
              duration={duration}
              className='next-service'
            >
              <img src={downChevron} className='pulsate-fwd' alt='next-item' />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services