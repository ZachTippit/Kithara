import React from 'react'
import Card from 'react-bootstrap/Card'

const Project = ({image, text}) => {
  return (
    <Card className='project-card'>
        <Card.Img src='https://images.unsplash.com/photo-1589271755419-b813a577ad42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80' alt='Card bg' />
        <Card.ImgOverlay>
            <Card.Text className='project-text'>
                {text}
            </Card.Text>
        </Card.ImgOverlay>
    </Card>
  )
}

export default Project