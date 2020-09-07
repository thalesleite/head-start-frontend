import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import api from '../../services/api';

import './Login.scss';

function Login({ language }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.login : PT_DATA.sections.login;
  const [email, setEmail] = useState();
  const history = useHistory();

  async function handleLogin(event) {
      event.preventDefault();

      try {
          const response = await api.post('/sessions', { email });

          localStorage.setItem('userEmail', email);
          localStorage.setItem('userName', response.data.name);

          history.push('/dashboard');
      } catch (error) {
          alert('Login error, try again!');
      }
  }

  return (
    <div className="container login">
      <h1>Login</h1>

      <form
        onSubmit={handleLogin}
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
          <Grid item xs={12}>
            <TextField
              className="form-input"
              required 
              id="password" 
              label={ text[1] }
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              className="btn-purple float-r"
              type="submit"
            >
                Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" className="float-l">
              <Link href="/" onClick={ () => {} }>
                { text[2] }
              </Link>
            </Typography>
            <Typography variant="subtitle2" className="float-r">
              <Link href="/" onClick={ () => {} }>
                { text[3] }
              </Link>
            </Typography>
          </Grid>
        </Grid>

      </form>

    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps)(Login);