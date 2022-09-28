// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';

import {    
    Card,
    CardActions,
    CardContent,
    TextField, 
    Button,
} from '@mui/material';


const ContactForm = ({fnAddContact}) => {
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({});

    
    const fnInputOnChange = (event) => {
        // identify the input id
        let inputName = event.target.id       
        
        // Set object props by inputName & value
        setNewContact({ 
            ...newContact,
             [inputName]: event.target.value,
        });

    }


    const fnFormOnSubmit = (event) => {
        event.preventDefault();     

        // Send newContact
        fnAddContact(newContact);

        // Set empty
        setNewContact({
            name: '',
            phone: '',
            email: '',
            photo: '',
        });

    }

    return (
        // Form berisi name, phone, email, dan photo url
        <form onSubmit={fnFormOnSubmit}>
            <Card sx={{ width: '100%', backgroundColor: '#f3f1eb' }}>
                <CardContent>
                    <TextField 
                        id="name" 
                        label="Name" 
                        variant="filled" 
                        color="success"
                        margin="dense"                       
                        required 
                        fullWidth 
                        value={newContact.name} 
                        onChange={fnInputOnChange} 
                    />
                    <TextField 
                        id="phone" 
                        label="Phone" 
                        variant="filled" 
                        color="success" 
                        margin="dense"                       
                        required 
                        fullWidth 
                        value={newContact.phone} 
                        onChange={fnInputOnChange}
                    />
                    <TextField 
                        id="email" 
                        label="Email" 
                        variant="filled" 
                        color="success"
                        margin="dense"                       
                        required 
                        fullWidth 
                        value={newContact.email} 
                        onChange={fnInputOnChange}
                    />
                    <TextField 
                        id="photo" 
                        label="Photo URL" 
                        variant="filled" 
                        color="success"
                        margin="dense"                        
                        required 
                        fullWidth 
                        value={newContact.photo} 
                        onChange={fnInputOnChange}
                    />                        
                </CardContent>
                <CardActions>
                    <Button type="submit" color="success">Add new</Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default ContactForm;