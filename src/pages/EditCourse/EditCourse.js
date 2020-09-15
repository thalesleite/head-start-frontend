import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from '@material-ui/core';

import { selectCourses } from '../../redux/course/course.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './EditCourse.scss';


function EditCourse({ courses, currentUser }) {
  return (
    <div className="container dashboard">
      Edit Course
    </div>
  );
}

export default EditCourse;