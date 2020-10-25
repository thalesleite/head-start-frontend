import React from 'react';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import './Footer.scss';

function Footer() {
  let newDate = new Date()
  let year = newDate.getFullYear();

  return (
    <footer className="footer">
      <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Link 
            to="/security-policy"
            onClick={() => window.scrollTo(0, 0)}
            >
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <span className="">Copyright © {year} Head Start</span>
          </Grid>
          <Grid item xs={12} md={4}>
            <span className="social">
              <a 
                className="facebook" 
                href="https://www.facebook.com/Head-Start-Courses-116549869955570/" 
                target="_blank"
              >
                <FacebookIcon />
              </a>
            </span>
            <span className="social">
              <a
                className="instagram"
                href="https://www.instagram.com/headstartcourses"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </span>
            <span className="social">
              <a 
                className="whatsapp"
                href="https://api.whatsapp.com/send?phone=3530899720494" 
                target="_blank"
              >
                <WhatsAppIcon />
              </a>
            </span>
          </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;