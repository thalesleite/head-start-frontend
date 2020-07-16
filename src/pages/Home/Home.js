import React from 'react';

import backgroundImage from '../../assets/background.jpg';

import './Home.scss';


function Home() {
  return (
    <img className="bkg-img" src={backgroundImage} alt=""/>
  );
}

export default Home;