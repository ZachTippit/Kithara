import React from 'react'
import Card from 'react-bootstrap/Card'

const Project = ({image, text}) => {
  return (
    <Card className='project-card'>
        <Card.Img src={image} alt='Card bg' />
        <Card.ImgOverlay>
            <Card.Text className='project-text'>
                {text}
            </Card.Text>
        </Card.ImgOverlay>
    </Card>
  )
}

export default Project