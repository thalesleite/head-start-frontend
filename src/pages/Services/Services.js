import React, { useState } from 'react';

import CourseCart from '../../components/CourseCart/CourseCart';

import './Services.scss';

function Services({ courses, addCart }) {
  const online = courses.filter( course => course.type === 'online' );
  const facetoface = courses.filter( course => course.type !== 'online' );

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
              <CourseCart key={course.id} course={course} addCart={addCart} />
            ))
          : <p>Sorry, No online courses at the moment!</p>
        )}
      </section>

      <h2>Face-to-face Courses</h2>
      <section className="services-cards">
        {(
          faceToFaceCourses ?
          faceToFaceCourses.map( course => (
            <CourseCart key={course.id} course={course} addCart={addCart} />
          ))
          : <p>Sorry, No face to face courses at the moment!</p>
        )}
      </section>
    </div>
  );
}

export default Services;