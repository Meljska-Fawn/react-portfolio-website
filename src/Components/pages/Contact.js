import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { validateEmail } from '../../utils/helpers';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'contactName') {
            setContactName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setUserMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the contactName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !contactName) {
            if (!contactName) {
                setErrorMessage('Contact name is required');
            } else {
                setErrorMessage('Email is invalid');
            }
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        // If everything goes according to plan, we want to clear out the input after a successful submit.
        setContactName('');
        setEmail('');
        setUserMessage('');
    };

    return (
        <div>
            <p>Contact</p>
            <form className="form">
                <TextField
                    fullWidth label="Full Name"
                    id="fullWidth"
                    defaultValue="Normal"
                    variant="standard"
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                />
                <TextField
                    fullWidth label="Email"
                    id="fullWidth"
                    defaultValue="Normal"
                    variant="standard"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                />
                <TextField
                    id="standard-multiline-static"
                    fullWidth label="Message"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="standard"
                    value={userMessage}
                    name="userMessage"
                    onChange={handleInputChange}
                    type="text"
                />
                    <Button onClick={handleFormSubmit} type="button" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;