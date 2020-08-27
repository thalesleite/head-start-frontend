import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCourses } from '../../redux/course/course.selectors';

import CourseCart from '../../components/CourseCart/CourseCart';

import './Services.scss';

const Services = ({ courses }) => {
  const online = courses.filter( course => course.type === 'online' );
  const facetoface = courses.filter( course => course.type !== 'online' );

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
              <CourseCart key={course.id} course={course} />
            ))
          : <p>Sorry, No online courses at the moment!</p>
        )}
      </section>

      <h2>Face-to-face Courses</h2>
      <section className="services-cards">
        {(
          facetoface ?
          facetoface.map( course => (
            <CourseCart key={course.id} course={course} />
          ))
          : <p>Sorry, No face to face courses at the moment!</p>
        )}
      </section>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses
});

export default connect(mapStateToProps)(Services);