import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Alert from '@material-ui/lab/Alert';
import { Grid, TextField, Button } from '@material-ui/core';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import api from '../../services/api';

import './ResetPassword.scss';

class ResetPassword extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: '',
      password: '',
      confirmPassword: '',
      validError: '',
      error: '',
      message: ''
    };
  }

  async componentDidMount() {
    try {
        const token = this.props.match.params.token;
        const response = await api.get(`/user-validate/${token}`);

        this.setState({
          userId: response.data.id,
          password: '',
          confirmPassword: '',
          validError: '',
          error: '',
          message: ''
        });
      } catch (error) {
        const { message } = error?.response?.data;
        this.setState({
          validError: message
        });
      }
  }

  async handleSubmit() {
    const { userId, password, confirmPassword } = this.state;

    if ( password !==  confirmPassword ) {
      this.setState({
        error: `Passwords don't match!`
      });
    } else {

      try {
        await api.put('/user-reset-password', { id: userId, password });
        this.setState({
          userId: '',
          password: '',
          confirmPassword: '',
          validError: '',
          error: '',
          message: 'Your password has been updated!'
        });

      } catch (error) {
        console.log(error);
        const { message } = error?.response?.data;
        this.setState({
          error: message
        });
      }
    }
  }

  render() {
    const { password, confirmPassword, error, validError, message } = this.state;

    // getting language text
    const { language } = this.props;
    const text = language === 'EN' ? EN_DATA.sections.login : PT_DATA.sections.login;

    return (
      <div className="container login">
        <h1>Reset Password</h1>
  
        <form
          onSubmit={e => { 
            e.preventDefault();
            this.handleSubmit();
          }}
          className="form-container" 
          noValidate 
          autoComplete="off"
        >

            {
              validError ? (
                <Grid item xs={12}>
                  <Alert severity="error">{ validError }</Alert>
                </Grid>
              ) : (
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField
                      className="form-input"
                      required 
                      id="password" 
                      label="Password"
                      type="password"
                      value={password}
                      onChange={e => this.setState({ password: e.target.value })}
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
                      onChange={e => this.setState({ confirmPassword: e.target.value })}
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
              )
            }
        </form>
  
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps)(ResetPassword);