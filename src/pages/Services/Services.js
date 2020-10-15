import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCourses } from '../../redux/course/course.selectors';
import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import CourseCart from '../../components/CourseCart/CourseCart';

import './Services.scss';

const Services = ({ courses, language }) => {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.services : PT_DATA.sections.services;

  const online = courses ? courses.filter( course => course.type === 'online' ) : '';
  const facetoface = courses ? courses.filter( course => course.type !== 'online' ) : '';

  return (
    <div 
      id="services" 
      className="container txt-center services"
    >
      <h1>{ text[0] }</h1>
      <h2>{ text[1] }</h2>
      <section className="services-cards line-bottom">
        {(
          online ?
            online.map( course => (
              <CourseCart key={course._id} course={course} language={language} />
            ))
          : ''
        )}
      </section>

      <h2>{ text[2] }</h2>
      <section className="services-cards">
        {(
          facetoface ?
          facetoface.map( course => (
            <CourseCart key={course._id} course={course} language={language} />
          ))
          : ''
        )}
      </section>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
  language: selectLanguage
});

export default connect(mapStateToProps)(Services);