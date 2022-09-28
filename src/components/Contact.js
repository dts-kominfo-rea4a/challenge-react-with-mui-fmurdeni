// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {    
    List,
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
        <List sx={{ bgcolor: '#dbf6f0' }}>
            {
                data.map( dt => {
                    return (
                        <div key={dt.name}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar alt={dt.name} src={dt.photo} sx={{ width: 80, height: 80, marginRight: '1.5em' }}/>
                                </ListItemAvatar>
                                <ListItemText primary={dt.name} secondary={
                                    <>
                                        <span style={{display: 'block'}}>{dt.phone}</span>
                                        <span style={{display: 'block'}}>{dt.email}</span>
                                    </>
                                }/>
                            </ListItem>
                            <Divider />    
                        </div>
                    );
                })
            }
        </List>
    );
};

export default Contact;
