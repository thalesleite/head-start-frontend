import React from 'react';
import { connect } from 'react-redux';

import Alert from '@material-ui/lab/Alert';
import { Grid } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import { setCurrentUser } from '../../redux/user/user.actions';

import api from '../../services/api';

import './Success.scss';

class Success extends React.Component {

  async componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('userCart'));
    const userId = localStorage.getItem('userId');

    if ( userId && cart) {
        let response = await api.get(`/user/${userId}`);
        setCurrentUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          type: response.data.type,
          level: response.data.level
        });

        Date.prototype.addDays = function (days) {
          let date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);

          return date;
        }
        const date = new Date();

        cart.forEach(async item => {
          response = await api.post('/user-courses', { 
            user_id: userId, 
            course_id: item._id,
            deadline: date.addDays(item.duration),
            type: item.type
          });
        });

        if (!response.error) {
          localStorage.setItem('userCart', null);
        }
    }
  }

  render() {
    return (
      <div className="container success">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Alert severity="success">Thank you for your purchase!</Alert>
          </Grid>
          <Grid item xs={12}>
            <Link
              className="btn-purple"
              to="/dashboard"
            >
              Go to your dashboard
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
};

export default connect(null, mapDispatchToProps)(Success);