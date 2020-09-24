import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, 
} from 'reactstrap';


const Project = props => {
    
    return (
        <>
            <Card className="text-light bg-dark">
                <CardImg top width="100%" src={props.image} alt={props.title} />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.subtitle}</CardSubtitle>
                    <CardText>{props.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>

        </>
    )
}

export default Project