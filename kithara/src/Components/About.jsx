import React from 'react'
import {default as GlobeStare} from '../assets/globe-stare.png'

const About = () => {
  return (
    <div id='about' className='about section'>
      <img src={GlobeStare} loading='lazy' alt='about-header-img' />
      <h2>About Kithara</h2>
      <p>Kithara is a technical consultancy headquartered in Denver, Colorado. We specialize in working with founder-stage businesses to set up your technical infrastructure to maximize your ability to scale from the get go.</p>
      <p>After working with organizations ranging from blue-chip international regulatory bodies to seed-stage startups, we are familiar with what is needed to make an organization successful from a technical standpoint. Let us help you unlock the true potential of your business/non-profit/endeavors!</p>
    </div>
  )
}

export default About