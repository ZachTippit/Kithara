import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { Link, animateScroll as scroll} from 'react-scroll';
import {default as logo} from '../assets/kithara-logo.png'

const offset = -200
const duration = 500


const Nav = () => {
  return (
    <div className='nav'>
        <Container fluid id='NavGrid'>
            {/* In Row on Desktop, Stacked in Mobile */}
            <Row>
                <Col xs={12} md>
                    <Link
                        activeClass='null'
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                        className='nav-top'
                    >
                        <img src={logo} className='nav-logo' alt='kithara-logo' />
                        <button className='navButton logo' href='https://www.kithara.dev'>Kithara Ltd.</button>
                    </Link>
                </Col>
                <Col xs={12} md className='header__right'>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                        className='nav-item'
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                        className='nav-item'
                    >
                        Services
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                        className='nav-item'
                    >
                        Projects
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                        className='nav-item'
                    >
                        Contact
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Nav