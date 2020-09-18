import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import api from '../../services/api';

import './CreateAccount.scss';

function CreateAccount({ language }) {
  // getting language text
  //const text = language === 'EN' ? EN_DATA.sections.createAccount : PT_DATA.sections.createAccount;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const history = useHistory();

  async function handleSubmit(event) {
      event.preventDefault();

      try {
          const response = await api.post('/users', { name, email, password, address, phone });
          localStorage.setItem('userEmail', email);

          history.push('/login');
      } catch (error) {
        alert('Create user error!!!');
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
              // value={email}
              // onChange={e => setEmail(e.target.value)}
            />
          </Grid>
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

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps)(CreateAccount);