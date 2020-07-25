import React from 'react';

import { Parallax } from 'react-scroll-parallax';
import BartiraImg from '../../assets/BARTIRA.jpg';

import './AboutUs.scss';

function AboutUs() {
  return (
    <div 
      id="about-us" 
      className="container txt-center about"
    >

      <section className="about-section">
        <h1>HEAD START</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, 
          eos repudiandae nulla libero porro eius, maxime, pariatur quas omnis similique error 
          impedit rerum! Illum sequi possimus cupiditate obcaecati, nobis repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, 
          eos repudiandae nulla libero porro eius, maxime, pariatur quas omnis similique error 
          impedit rerum! Illum sequi possimus cupiditate obcaecati, nobis repellendus.
        </p>
      </section>

      <section className="about-section">
        <h1>BARTIRA</h1>
        <div className="about-founder">
        
          <Parallax y={[-20, 20]}>
            <img className="bartira-img" src={BartiraImg} alt="Bartira"/>
          </Parallax>
          
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, 
              eos repudiandae nulla libero porro eius, maxime, pariatur quas omnis similique error 
              impedit rerum! Illum sequi possimus cupiditate obcaecati, nobis repellendus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, 
              eos repudiandae nulla libero porro eius, maxime, pariatur quas omnis similique error 
              impedit rerum! Illum sequi possimus cupiditate obcaecati, nobis repellendus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;