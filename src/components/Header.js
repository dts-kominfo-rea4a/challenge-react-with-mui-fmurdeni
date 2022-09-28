// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const Header = () => {
  return (
    // Header berisi judul dan subtitle
    // Subtitle: Your friendly contact app
    // Judul: Call a Friend
    <header style={{textAlign: 'center', padding: '2em', marginBottom: '2.5em'}}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: '2.7em', fontWeight: '500' }}>
        Call a Friend
      </Typography>
      <Divider><Typography variant="subtitle1" component="h5" gutterBottom>Your friendly contact app</Typography></Divider>
    </header>
  );
};

export default Header;
