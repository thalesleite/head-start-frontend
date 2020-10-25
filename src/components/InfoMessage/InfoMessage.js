import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './InfoMessage.scss';

const InfoMessage = ({ language }) => {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.message : PT_DATA.sections.message;

  return (
    <div className="info-message">
      <p className="important"><b>{ text[0] }</b></p>
      <p>
        { text[1] }
      </p>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps, null)(InfoMessage);