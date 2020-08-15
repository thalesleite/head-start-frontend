import React, { useState } from 'react';

import CourseCart from '../../components/CourseCart/CourseCart';

import './Services.scss';

function Services(props) {
  const online = props.courses.filter( course => course.type === 'online' );
  const facetoface = props.courses.filter( course => course.type !== 'online' );

  const [onlineCourses, setOnlineCourses] = useState(online);
  const [faceToFaceCourses, setFaceCourses] = useState(facetoface);

  return (
    <div 
      id="services" 
      className="container txt-center services"
    >
      <h1>SERVICES</h1>
      <h2>Online Courses</h2>
      <section className="services-cards line-bottom">
        {(
          onlineCourses ?
            onlineCourses.map( course => (
              <CourseCart key={course.id} course={course} />
            ))
          : 'Sorry, No online courses at the moment!'
        )}
      </section>

      <h2>Face-to-face Courses</h2>
      <section className="services-cards">
        {(
          faceToFaceCourses ?
          faceToFaceCourses.map( course => (
            <CourseCart key={course.id} course={course} />
          ))
          : 'Sorry, No face to face courses at the moment!'
        )}
      </section>
    </div>
  );
}

export default Services;