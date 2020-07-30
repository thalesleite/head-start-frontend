import React, { useState } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid, TextField, Button, TextareaAutosize } from '@material-ui/core';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './Contact.scss';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [lat] = useState(53.3519139);
  const [lng] = useState(-6.2530696);
  const [zoom] = useState(16);
  const position = [lat, lng];

  return (
    <div 
      id="contact" 
      className="container txt-center contact"
    >

    <section>
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
    </section>

    <section>
      <h2>Location</h2>
      <p>You can find Head Start Courses in: </p>
      <p><i>Dublin City Centre, Ulysses House, 23/24, Foley Street, Dublin 1. D01 W2T2.</i></p>
      <p>You are very welcome here. Will be our pleasure having you with us!</p>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Map 
            center={position}
            zoom={zoom}
          >
            <TileLayer
              attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                <span>
                  Head Start Courses
                </span>
              </Popup>
            </Marker>
          </Map>
        </Grid>
      </Grid>
    </section>
    </div>
  );
}

export default Contact;