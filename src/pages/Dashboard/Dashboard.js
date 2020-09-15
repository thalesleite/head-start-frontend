import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { selectCourses } from '../../redux/course/course.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './Dashboard.scss';


function Dashboard({ courses, currentUser }) {
  return (
    <div className="container dashboard">
      <h1>Hi, { currentUser?.name }!</h1>

       {
        currentUser?.type === 0 ? (
          <div>
            <p>Admin</p>

            {
              courses && courses.map( course => (
                <div key={ course.id } className="course">
                  <span className="name"> { course.name }</span>
                  <Button
                    className="edit-button"
                    onClick={() => {}}
                  >
                    edit 
                    <EditIcon />
                  </Button>
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
const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Dashboard);