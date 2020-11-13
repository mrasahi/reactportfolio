import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import makMajestic from '../../assets/img/mak_majestic.png'
import './Home.css'

const Home = () => {
    return (
        <>
            <Container className="text-center">
                <br />
                <Row>
                    <Col>
                        <h1>Makoto Asahi</h1>
                        <h6>Full Stack Web Developer</h6>
                        <img className="header-img img-fluid" title={"the greatest"} src={makMajestic} alt="Mak majestic"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>no u</p>
                    
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Home