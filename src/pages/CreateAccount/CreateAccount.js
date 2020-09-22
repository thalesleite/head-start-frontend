import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Alert from '@material-ui/lab/Alert';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';

import api from '../../services/api';

import './CreateAccount.scss';

function CreateAccount() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [type, setType] = useState(1);
  const [error, setError] = useState();
  const history = useHistory();

  async function handleSubmit(event) {
      event.preventDefault();

      if( password !== confirmPassword ) {
        setError('Please make sure your passwords match!');
        return;
      }

      try {
        await api.post('/users', { name, email, password, address, phone, type });
        localStorage.setItem('userEmail', email);
        setError('');

        history.push('/login');
      } catch (error) {
        const { message } = error?.response?.data;
        setError(message);
      }
  }

  return (
    <div className="container account">
      <h1>Create Account</h1>

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
              id="address" 
              label="Address"
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="form-input" 
              required 
              id="phone" 
              label="Phone"
              type="number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
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
            <TextField
              className="form-input"
              required 
              id="password" 
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="form-input"
              required 
              id="confirmPassword" 
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </Grid>
          {
            error ? (
              <Grid item xs={12}>
                <Alert severity="error">{ error }</Alert>
              </Grid>
            ) : ''
          }
          <Grid className="form-button" item xs={12}>
            <Button 
              className="btn-orange float-r"
              onClick={() => history.push('/login')}
            >
                Cancel
            </Button>
            <Button 
              className="btn-purple float-r"
              type="submit"
            >
              Create
            </Button>
          </Grid>
        </Grid>

      </form>

    </div>
  );
}

export default CreateAccount;