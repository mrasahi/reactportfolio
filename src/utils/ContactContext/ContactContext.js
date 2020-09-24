import { createContext } from 'react'

const ContactContext = createContext({
    name: '',
    email: '',
    message: '',
    handleInputChange: () => { },
    handleSubmit: () => { }

})

export default ContactContext