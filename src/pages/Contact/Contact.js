import React, { useState } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid, TextField, Button, TextareaAutosize } from '@material-ui/core';

import 'leaflet/dist/leaflet.css';
import './Contact.scss';

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [lat] = useState(53.3495808);
  const [lng] = useState(-6.258688);
  const [zoom] = useState(13);

  return (
    <div 
      id="contact" 
      className="container txt-center contact"
    >
      <h1>CONTACT US</h1>
      <p>
        Fill out the fields below. We will answer you as soon as possible.
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
              className="btn-purple"
              type="submit"
            >
                Send
            </Button>
          </Grid>
        </Grid>
      </form>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Map 
            center={[lat, lng]} 
            zoom={zoom}
          >
            <TileLayer
              attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;