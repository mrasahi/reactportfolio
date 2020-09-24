import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Form from '../../components/Form'
import ContactContext from '../../utils/ContactContext'

const Contact = () => {

    const [contactState, setContactState] = useState({
        name: '',
        email: '',
        message: ''
    })

    contactState.handleInputChange = event => {
        setContactState({ ...contactState, [event.target.name]: event.target.value })
    }

    contactState.handleSubmit = event => {
        event.preventDefault()
        console.log('This will console.log your message for now')
        console.log(contactState)
    }


    return (
        <>
            <Container>
                <br />
                <h1>Contact Page</h1>
                <Row>
                    <Col>
                        <ContactContext.Provider value={contactState}>
                            <Form />
                        </ContactContext.Provider>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact