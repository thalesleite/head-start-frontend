import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HashLink as Link } from 'react-router-hash-link';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ScheduleIcon from '@material-ui/icons/Schedule';

import { selectCourses } from '../../redux/course/course.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import api from '../../services/api';

import './Reports.scss';

class Reports extends React.Component {
  constructor() {
    super();

    this.state = {
      userCourses: ''
    }
  };

  async componentDidMount() {
    const userId = localStorage.getItem('userId');

    if ( userId ) {
      await api.get(`/user-courses/${userId}`)
          .then(response => {
            this.setState({ userCourses: response.data.course });
      });
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    const { courses, currentUser } = this.props;

    return (
      <div className="container reports">
        <div className="report">
          <h1>Reports</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, null)(Reports);