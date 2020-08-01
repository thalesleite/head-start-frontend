import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

import './BurgerMenu.scss';

function BurgerMenu() {
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
          HOME
        </Link>
        <a href="/#about-us">
          ABOUT US
        </a>
        <a href="/#services" >
          SERVICES
        </a>
        <a href="/#contact">
          CONTACT
        </a>
        <Link to="/login">
          LOGIN
        </Link>
        <Link to="/">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}
export default BurgerMenu;