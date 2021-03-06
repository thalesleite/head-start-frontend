import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Alert from '@material-ui/lab/Alert';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid, TextField, Button, TextareaAutosize, MenuItem, InputLabel, Select } from '@material-ui/core';
import L from 'leaflet';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import api from '../../services/api';

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState('');
  const [sending, setSending] = useState('');
  const [error, setError] = useState();
  const [isValid, setIsValid] = useState(false);

  const [lat] = useState(53.3475528);
  const [lng] = useState(-6.2622095);
  const [zoom] = useState(17);
  const position = [lat, lng];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        name: name,
        email: email,
        message: message,
        phone: phone,
        subject: subject
      };
      
      setError('');
      setSent('');
      setIsValid(true);
      setSending('...sending');

      await api.post('/send', data)
        .then( res => {
          resetForm();
          setSent('Your message has sent!');
      });
    } catch (error) {
      const { message } = error?.response?.data;
      setError(message);
    }
  }

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setSending('');
    setIsValid(false);
  }

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
        onSubmit={ handleSubmit }
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
              disabled={isValid && !error}
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
              disabled={isValid && !error}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="form-input" 
              required 
              id="phone" 
              label={ text[4] }
              type="number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              disabled={isValid && !error}
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <InputLabel id="select-subject">{ text[5] }</InputLabel>
            <Select
              className="form-input"
              required
              labelId="select-subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              disabled={isValid && !error}
            >
              <MenuItem value={ text[6] }>{ text[6] }</MenuItem>
              <MenuItem value={ text[7] }>{ text[7] }</MenuItem>
              <MenuItem value={ text[8] }>{ text[8] }</MenuItem>
              <MenuItem value={ text[9] }>{ text[9] }</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize 
              className="form-input textarea" 
              placeholder={ text[10] } 
              value={message}
              onChange={e => setMessage(e.target.value)}
              disabled={isValid && !error}
            />
          </Grid>
          {
            error ? (
              <Grid item xs={12}>
                <Alert severity="error">{ error }</Alert>
              </Grid>
            ) : ''
          }
          {
            sending && !error ? (
              <Grid item xs={12}>
                <Alert severity="warning">{ sending }</Alert>
              </Grid>
            ) : ''
          }
          {
            sent && !error ? (
              <Grid item xs={12}>
                <Alert severity="success">{ sent }</Alert>
              </Grid>
            ) : ''
          }
          <Grid item xs={12}>
            <Button
              className="btn-purple"
              type="submit"
            >
                { text[11] }
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>

    <section>
      <h2>{ text[12] }</h2>
      <p>{ text[13] } </p>
      <p><i>32 Bachelors Walk, North City, Dublin, D01 HK76</i></p>
      <p>+353 (089) 972-0494 </p>
      <p>{ text[14] }</p>
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