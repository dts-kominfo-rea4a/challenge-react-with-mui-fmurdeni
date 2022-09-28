import React, { useState } from "react";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

import {Container, Grid} from '@mui/material/';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  }

  return (
    <div className="App">
      <Header/>
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <ContactForm fnAddContact={addNewContact}/>
          </Grid>
          <Grid item xs={6}>
            <Contact data={contacts}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
