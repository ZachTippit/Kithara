import HubspotForm from 'react-hubspot-form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {default as Connect} from '../assets/connect.png'

const Contact = () => {
  return (
    <div id='contact' className='contact section'>
      <div className='section-txt-header'>
        <img src={Connect} alt='contact-header-txt-icon' />
        <h2>Let's Connect!</h2>
      </div>
      <p>Starting a <span className='accented'>new business</span> or run an <span className='accented'>interesting non-profit</span> you need technical help with? Let's chat!</p>
      <p>Open to <b>contract work</b>, recurring retainer-based <b>IT services</b>, and on a <b>project-to-project basis</b>.</p>
      <div className='hubspotForm'>
        <HubspotForm
          portalId='22622323'
          formId='a3c107f2-f78e-4e1d-9051-687838b5c99d'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>} 
        />
      </div>
      <Container>
        <Row>
          {/* Socials */}
          <Col>       
            <a aria-label='linked in' href='https://www.linkedin.com/in/zachtippit' rel='noopener noreferrer' target='_blank'>
              <i></i>
            </a>
          </Col>
          <Col>
            
          </Col>
        </Row>
      </Container>
      <p className='copyright'>©2022 Kithara Ltd.</p>
    </div>
  )
}

export default Contact