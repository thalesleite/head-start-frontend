import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HashLink as Link } from 'react-router-hash-link';

import { Button } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { selectCourses } from '../../redux/course/course.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { setCourses } from '../../redux/course/course.actions';

import api from '../../services/api';

import './Dashboard.scss';

class Dashboard extends React.Component {

  componentDidMount() {
    const { setCourses } = this.props;
    
    api.get('/courses')
      .then(response => {
        setCourses(response.data);
    });
  }

  render() {
    const { courses, currentUser } = this.props;

    return (
      <div className="container dashboard">
        <h1>Hi, { currentUser?.name }!</h1>

        {
          currentUser?.type === 0 ? (
            <div>
              <p>Admin</p>

              <div>
                <Link
                  className="add-button"
                  to='/add-course/'
                >
                  Add Course <AddCircleOutlineIcon />
                </Link>
              </div>
              {
                courses && courses.map( course => (
                  <div key={ course.id } className="course">
                    <span className="name"> { course.name }</span>
                    {/* <Link
                      className="delete-button"
                      onClick={() => {}}
                    >
                      delete 
                      <DeleteIcon />
                    </Link> */}
                    <Link
                      className="edit-button"
                      to={`/edit-course/${course.id}`}
                    >
                      edit 
                      <EditIcon />
                    </Link>
                  </div>
                ))
              }
            </div>
          ) : (
            <div>Student</div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCourses: courses => dispatch(setCourses(courses))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);