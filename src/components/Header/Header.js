import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

function Header() {
  return (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/">
                HOME
            </Link>
            <Link className="option" to="/about-us">
                ABOUT US
            </Link>
            <Link className="option" to="/courses">
                COURSES
            </Link>
            <Link className="option" to="/contact">
                CONTATC US
            </Link>
            <Link className="option" to="/login">
                LOGIN
            </Link>
        </div>
    </div>
  );
}

export default Header;