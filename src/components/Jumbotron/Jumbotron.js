import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Header = (props) => {
    return (
        <>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Makoto Asahi</h1>
                    <p className="lead">Full Stack Web Developer</p>
                </Container>
            </Jumbotron>
        </>
    )
}

export default Header