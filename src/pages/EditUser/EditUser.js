import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Grid, TextField, Button } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import api from '../../services/api';

import './EditUser.scss';

class EditUser extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      email: '',
      address: '',
      phone: '',
      password: ''
    };
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;

    api.get(`/user/${id}`)
      .then(response => {
        const user = response.data;
        this.setState({
          id: id,
          name: user?.name,
          email: user?.email,
          address: user?.address,
          phone: user?.phone
        });
    });
  }

  async handleSubmit() {
    const { 
      id,
      name, 
      email,
      address, 
      phone,
      password 
    } = this.state;

    try {
        const response = await api.put(`/user/${id}`, { 
          id,
          name, 
          email,  
          address, 
          phone,
          password
        });

        this.props.history.push('/dashboard');
        window.location.reload(false);
    } catch (error) {
        alert('Edit user error!!!');
    }
  }

  render() {
    const { 
      name, 
      email, 
      address, 
      phone,
      password
    } = this.state;
    const { language } = this.props;
    const text = language === 'EN' ? EN_DATA.sections.editUser : PT_DATA.sections.editUser;

    return (
      <div className="container edit">
        <h1>{ text[0] }</h1>

        <form
          onSubmit={(e) => { 
            e.preventDefault();
            this.handleSubmit();
          }}
          className="form-container" 
          noValidate 
          autoComplete="off"
        >

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="name" 
                  label={ text[1] }
                  type="text"
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
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
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="address" 
                  label={ text[2] }
                  type="text"
                  value={address}
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="phone" 
                  label={ text[3] }
                  type="number"
                  value={phone}
                  onChange={e => this.setState({ phone: e.target.value })}
                />
              </Grid>
              {/* <Grid item xs={12}>
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
              </Grid> */}
            </Grid>
           
            <Grid item xs={12}>
              <Button 
                className="btn-save float-r"
                type="submit"
              >
                { text[4] }
              </Button>
              <Link 
                className="btn-cancel float-r"
                to='/dashboard'
              >
                { text[5] }
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>
    )
  };
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps, null)(EditUser);