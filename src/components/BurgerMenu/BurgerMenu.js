import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectLanguage } from '../../redux/language/language.selectors';

import { setCurrentUser } from '../../redux/user/user.actions';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './BurgerMenu.scss';

function BurgerMenu({ language, currentUser }) {
  // getting language text
  const menu = language === 'EN' ? EN_DATA.menu : PT_DATA.menu;
  const [open, setOpen] = useState(false);

  function handleLogout() {
    setCurrentUser();
    localStorage.clear();
  }

  return (
    <div>
      <div
        className={`burger-menu ${open ? '' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </div>
      <div className={`nav-right ${open ? '' : 'hide'}`}>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/"
        >
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
        {
          currentUser ? (
            <Link to="/dashboard">
              { currentUser?.type === 0 ? 'COURSES' : menu[6] }
            </Link>
          ) : ''
        }
        {
          // Admin reports
          currentUser?.type === 0 ? ( 
            < Link to = "/reports" > 
              REPORTS
            </Link>
          ) : ''
        }
        {
          currentUser ? (
            <Link
              onClick={() => handleLogout()} 
              to="/"
            >
              { menu[5] }
            </Link>
          ) :
          <Link to="/login">
            { menu[4] }
          </Link>
        }
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  language: selectLanguage
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);