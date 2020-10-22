import React from 'react';

import { Alert } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';


import './CreateAccountMessage.scss';

function CreateAccountMessage() {
  return (
    <div className="container message">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Alert severity="success" center={'true'}>
            Cadastro realizado com sucesso!
          </Alert>
        </Grid>
        <Grid item xs={12}>
          <Link
            className="btn-purple"
            to="/login"
          >
            Fazer login
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}


export default CreateAccountMessage;