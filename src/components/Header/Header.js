import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/head-start-branco.png';

import './Header.scss';

function Header() {
  return (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src={Logo} alt="Head Start"/>
        </Link>
        <div className="options">
            <Link className="option" to="/">
                HOME
            </Link>
            <a className="option" href="/#about-us">
                ABOUT US
            </a>
            <a className="option" href="/#courses">
                COURSES
            </a>
            <a className="option" href="/#contact">
                CONTACT
            </a>
            <Link className="option" to="/login">
                LOGIN
            </Link>
        </div>
    </div>
  );
}

export default Header;