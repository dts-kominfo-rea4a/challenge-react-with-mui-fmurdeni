// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {   
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
} from '@mui/material';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <div key={data.name}>
            <ListItem>
                <ListItemAvatar>
                <Avatar alt={data.name} src={data.photo} sx={{ width: 80, height: 80, marginRight: '1.5em' }}/>
                </ListItemAvatar>
                <ListItemText primary={data.name} secondary={
                    <>
                        <span style={{display: 'block'}}>{data.phone}</span>
                        <span style={{display: 'block'}}>{data.email}</span>
                    </>
                }/>
            </ListItem>
            <Divider />    
        </div>       
    );
};

export default Contact;
