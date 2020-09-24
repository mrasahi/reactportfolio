import React from 'react'
import Project from '../../components/Project'
import { Container, Row, Col } from 'reactstrap';

let p1 = {
    title: 'Some title',
    image: 'https://cdn.discordapp.com/attachments/701635174131171378/748373096800452648/sleepingcat.jpg'
}

let p2 = {
    title: 'Project 2',
    description: 'This is project 2 lorem'
}

const Portfolio = () => {
    return (
        <>
            <Container>
                <br />
                <h1>Portfolio Page</h1>
                <Row>
                    <Col md="6">
                        <Project {...p1} />
                    </Col>
                    <Col md="6">
                        <Project {...p2}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Portfolio