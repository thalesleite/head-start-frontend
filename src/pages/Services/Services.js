import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCourses } from '../../redux/course/course.selectors';

import CourseCart from '../../components/CourseCart/CourseCart';

import './Services.scss';

const Services = ({ courses, ...otherProps }) => {
  const online = courses ? courses.filter( course => course.type === 'online' ) : '';
  const facetoface = courses ? courses.filter( course => course.type !== 'online' ) : '';

  return (
    <div 
      id="services" 
      className="container txt-center services"
    >
      <h1>SERVICES</h1>
      <h2>Online Courses</h2>
      <section className="services-cards line-bottom">
        {(
          online ?
            online.map( course => (
              <CourseCart key={course.id} course={course} {...otherProps} />
            ))
          : ''
        )}
      </section>

      <h2>Face-to-face Courses</h2>
      <section className="services-cards">
        {(
          facetoface ?
          facetoface.map( course => (
            <CourseCart key={course.id} course={course} {...otherProps} />
          ))
          : ''
        )}
      </section>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses
});

export default connect(mapStateToProps)(Services);