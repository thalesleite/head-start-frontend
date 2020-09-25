import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import Alert from '@material-ui/lab/Alert';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import api from '../../services/api';

import './Login.scss';

function Login({ language, setCurrentUser }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.login : PT_DATA.sections.login;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
        const response = await api.post('/sessions', { email, password });

        localStorage.setItem('userId', response.data.id);
        setCurrentUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          type: response.data.type
        });
        setError('');

        history.push('/dashboard');
    } catch (error) {
      const { message } = error?.response?.data;
      setError(message);
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
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          {
            error ? (
              <Grid item xs={12}>
                <Alert severity="error">{ error }</Alert>
              </Grid>
            ) : ''
          }
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
              <Link 
                onClick={ 
                  () => { 
                    history.push('/create-account'); 
                  } 
                }
              >
                { text[2] }
              </Link>
            </Typography>
            <Typography variant="subtitle2" className="float-r">
              <Link 
                onClick={ 
                  () => { 
                    history.push('/'); 
                  } 
                }
              >
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);