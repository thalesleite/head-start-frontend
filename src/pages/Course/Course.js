import React from 'react';

import { Redirect } from 'react-router-dom';

import CourseSideMenu from '../../components/CourseSideMenu/CourseSideMenu';

import './Course.scss';

function Course() {
  const userId = localStorage.getItem('userId');

  return (
    <div className="container course">
    {
      userId ? (
        <CourseSideMenu />
      ) : (
        <Redirect to='/login' />
      )
    }
      
    </div>
  );
}

export default Course;