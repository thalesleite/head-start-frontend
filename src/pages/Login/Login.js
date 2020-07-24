import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';

import api from '../../services/api';

import './Login.scss';

function Login() {
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
              label="Email"
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
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              className="float-r" 
              variant="contained"
              type="submit">
                Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" className="float-l">
              <Link href="/" onClick={ () => {} }>
                or Create a new account
              </Link>
            </Typography>
            <Typography variant="subtitle2" className="float-r">
              <Link href="/" onClick={ () => {} }>
                Forgot Password?
              </Link>
            </Typography>
          </Grid>
        </Grid>

      </form>

    </div>
  );
}

export default Login;