import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Alert from '@material-ui/lab/Alert';
import { Grid, TextField, Button } from '@material-ui/core';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import api from '../../services/api';

import './ForgotPassword.scss';

function ForgotPassword({ language, setCurrentUser, cart }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.login : PT_DATA.sections.login;

  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
        await api.post('/users-token', { email });
        setError('');
        setEmail('');
        setMessage('A link has been sent to your email!');

    } catch (error) {
      const { message } = error?.response?.data;
      setError(message);
    }
  }

  return (
    <div className="container login">
      <h1>Forgot Password</h1>

      <form
        onSubmit={handleSubmit}
        className="form-container" 
        noValidate 
        autoComplete="off"
      >

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              className="form-input" 
              required 
              id="email" 
              label={ text[0] }
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            !error && message ? (
              <Grid item xs={12}>
                <Alert severity="success">{ message }</Alert>
              </Grid>
            ) : ''
          }
          <Grid item xs={12}>
            <Button 
              className="btn-purple float-r"
              type="submit"
            >
                Send
            </Button>
          </Grid>
        </Grid>

      </form>

    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});


export default connect(mapStateToProps)(ForgotPassword);