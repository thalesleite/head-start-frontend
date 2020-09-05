import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid, TextField, Button, TextareaAutosize } from '@material-ui/core';
import L from 'leaflet';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import 'leaflet/dist/leaflet.css';
import './Contact.scss';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Contact({ language }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.contact : PT_DATA.sections.contact;

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
      <h1>{ text[0] }</h1>
      <p>
        { text[1] }
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
              label={ text[2] }
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
              label={ text[3] }
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize className="form-input textarea" placeholder={ text[4] } />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="btn-purple"
              type="submit"
            >
                { text[5] }
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>

    <section>
      <h2>{ text[6] }</h2>
      <p>{ text[7] } </p>
      <p><i>Dublin City Centre, Ulysses House, 23/24, Foley Street, Dublin 1. D01 W2T2.</i></p>
      <p>{ text[8] }</p>
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

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps)(Contact);