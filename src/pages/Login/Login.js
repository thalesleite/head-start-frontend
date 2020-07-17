import React from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';

import './Login.scss';

function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form-container" noValidate autoComplete="off">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              className="form-input" 
              required 
              id="email" 
              label="Email"
              type="email"
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
            <Button className="float-r" variant="contained">Login</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" className="float-l">
              <Link href="#" onClick={ () => {} }>
                or Create a new account
              </Link>
            </Typography>
            <Typography variant="subtitle2" className="float-r">
              <Link href="#" onClick={ () => {} }>
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