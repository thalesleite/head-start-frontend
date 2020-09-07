import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './SecurityPolicy.scss';

function SecurityPolicy({ language }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.security : PT_DATA.sections.security;

  return (
    <div className="container security">
      <h1>{ text[0] }</h1>

      <p>{ text[1] }</p>
      <p>{ text[1] }</p>
      <p>{ text[1] }</p>
      <p>{ text[1] }</p>
      <p>{ text[1] }</p>
      <p>{ text[1] }</p>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps)(SecurityPolicy);