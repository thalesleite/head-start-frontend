import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BartiraImg from '../../assets/BARTIRA.jpg';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './AboutUs.scss';

function AboutUs({ language }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.about : PT_DATA.sections.about;

  return (
    <div 
      id="about-us" 
      className="container txt-center about"
    >

      <section className="about-section">
        <h1>{ text[0] }</h1>
        <p>{ text[1] }</p>
        <p>{ text[2] }</p>

        <b>{ text[3] }</b>
        <p>{ text[4] }</p>

        <b>{ text[5] }</b>
        <p>{ text[6] }</p>

        <b>{ text[7] }</b>
        <p>{ text[8] }</p>
      </section>

      <section className="about-section">
        <h1>{ text[9] }</h1>
        <div className="about-founder">

          <div>
            <img className="bartira-img" src={BartiraImg} alt="Bartira"/>
            <p>
              <i>{ text[10] }</i> { text[11] }
            </p>
          </div>
          
          <div className="description">
            <p>{ text[12] }</p>
            <p>{ text[13] }</p>
            <p>{ text[14] }</p>
            <p>{ text[15] }</p>
            <p>{ text[16] }</p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h1>{ text[17] }</h1>

        <iframe className="about-video"
          src="https://www.youtube.com/embed/LHJ5VaZlKsk">
        </iframe>
      </section>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps)(AboutUs);