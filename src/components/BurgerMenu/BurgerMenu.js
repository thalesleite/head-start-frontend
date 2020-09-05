import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './BurgerMenu.scss';

function BurgerMenu({ language }) {
  // getting language text
  const menu = language === 'EN' ? EN_DATA.menu : PT_DATA.menu;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`burger-menu ${open ? '' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </div>
      <div className={`nav-right ${open ? '' : 'hide'}`}>
        <Link to="/">
          { menu[0] }
        </Link>
        <a href="/#about-us">
          { menu[1] }
        </a>
        <a href="/#services" >
          { menu[2] }
        </a>
        <a href="/#contact">
          { menu[3] }
        </a>
        <Link to="/login">
          { menu[4] }
        </Link>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage
});

export default connect(mapStateToProps)(BurgerMenu);