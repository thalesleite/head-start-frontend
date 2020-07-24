import React, { useState } from 'react';

import { Grid, TextField, Button, Typography, Link, TextareaAutosize } from '@material-ui/core';

import './Contact.scss';

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <div 
      id="contact" 
      className="container txt-center contact"
    >
      <h1>Contact Us</h1>
      <p>
        Fill out the fields below. We will answer you soon.
      </p>
      <form
        //onSubmit={handleLogin}
        className="form-container" 
        noValidate 
        autoComplete="off"
      >

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              className="form-input"
              required 
              id="name" 
              label="Name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="form-input" 
              required 
              id="email" 
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize className="form-input textarea" placeholder="Message" />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit">
                Send it
            </Button>
          </Grid>
        </Grid>

      </form>

    </div>
  );
}

export default Contact;