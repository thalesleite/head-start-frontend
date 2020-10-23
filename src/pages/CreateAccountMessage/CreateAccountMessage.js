import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Alert } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './CreateAccountMessage.scss';

function CreateAccountMessage({ language }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.createUser : PT_DATA.sections.createUser;

  return (
    <div className="container message">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Alert severity="success" center={'true'}>
            { text[0] }
          </Alert>
        </Grid>
        <Grid item xs={12}>
          <Link
            className="btn-purple"
            to="/login"
          >
            { text[1] }
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps, null)(CreateAccountMessage);