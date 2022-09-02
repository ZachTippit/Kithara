import {Link, animateScroll as scroll} from 'react-scroll';
import {default as GlobeStare} from '../assets/globe-stare.png'
import {default as logo} from '../assets/kithara-logo.png'
import {default as downChevron} from '../assets/chevron-down.svg';

const offset = -200
const duration = 500

const About = () => {
  return (
    <div id='about' className='about section'>
      <img src={GlobeStare} loading='lazy' alt='about-header-img' />
      <div className='section-txt-header'>
        <img src={logo} alt='about-header-txt-icon' />
        <h2>About Kithara</h2>
      </div>
      <p>Kithara is a technical consultancy headquartered in Denver, Colorado. We specialize in working with founder-stage businesses to set up your technical infrastructure to maximize your ability to scale from the get go.</p>
      <p>After working with organizations ranging from blue-chip international regulatory bodies to seed-stage startups, we are familiar with what is needed to make an organization successful from a technical standpoint. Let us help you unlock the true potential of your business/non-profit/endeavors!</p>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={offset}
        duration={duration}
        className='next-service'
      >
        <img src={downChevron} className='pulsate-fwd' alt='next-item' />
      </Link>
    </div>
  )
}

export default About