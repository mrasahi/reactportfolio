import React, { useContext } from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron } from 'reactstrap';
import ContactContext from '../../utils/ContactContext'

const Contact = () => {

    const {
        handleSubmit,
        handleInputChange,
    } = useContext(ContactContext)

    return (
        <>
            <Jumbotron className="bg-dark">
                <Form>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input type="name" name="name" onChange={handleInputChange} placeholder="John Doe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Email:</Label>
                        <Input type="email" name="email" onChange={handleInputChange} placeholder="johndoe@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Message:</Label>
                        <Input type="textarea" name="message" onChange={handleInputChange} placeholder="Your message here..." />
                    </FormGroup>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Form>
            </Jumbotron>
        </>
    )
}

export default Contact