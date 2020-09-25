import React from 'react';

import Alert from '@material-ui/lab/Alert';
import { Grid, Button } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';


import './Cancel.scss';

function Cancel() {
  return (
    <div className="container cancel">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Alert severity="error">Ops, something is wrong! Your purchase has been canceled!</Alert>
        </Grid>
        <Grid item xs={12}>
          <Link
            className="btn-purple"
            to="/cart"
          >
            Go to your cart
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cancel;