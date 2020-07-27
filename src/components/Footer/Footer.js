import { Typography } from '@material-ui/core';
import React from 'react';

import './Footer.scss';

function Footer() {
  let newDate = new Date()
  //let date = newDate.getDate();
  //let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <footer className="footer">
      <p>Copyright © {year} Head Start</p>
    </footer>
  );
}

export default Footer;