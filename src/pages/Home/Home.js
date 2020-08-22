import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

import AboutUsPage from '../AboutUs/AboutUs';
import ServicesPage from '../Services/Services';
import ContactPage from '../Contact/Contact';

import BkgHeadStart from '../../assets/HEAD-START.jpeg';
import BkgTwo from '../../assets/carousell2.jpg';
import BkgThree from '../../assets/carousell3.jpg';
import BkgFour from '../../assets/carousell4.jpg';
import BkgFive from '../../assets/carousell5.jpg';
import BkgSix from '../../assets/carousell6.jpg';

import './Home.scss';

function Item(props) {
  return (
    <Paper 
        className="carousel-item"
        style={{ 
          backgroundColor: props.item.color,
          backgroundImage: `url(${props.item.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 55%"
        }}
        elevation={10}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      
      {
        ( props.item.type === 'questions' ) 
        ? (
          <Button 
            className="btn-check" 
            href="/#contact"
          >
            Contact us!
          </Button>
        ): ''
      }
    </Paper>
  )
}

function Home() {
  const items = [
    {
      name: "",
      description: "",
      type: "",
      color: "",
      image: BkgHeadStart
    },
    {
      name: "",
      description: "",
      type: "",
      color: "#1f2729",
      image: ""
    },
    {
      name: "",
      description: "",
      type: "",
      color: "",
      image: BkgTwo
    },
    {
      name: "",
      description: "",
      type: "",
      color: "",
      image: BkgThree
    },
    {
      name: "",
      description: "",
      type: "",
      color: "",
      image: BkgFour
    },
    {
      name: "",
      description: "",
      type: "",
      color: "",
      image: BkgFive
    },
    {
      name: "",
      description: "",
      type: "",
      color: "",
      image: BkgSix
    },
  ]

  return (
    <div id="main">
      <Carousel 
        className="carousel"
        autoPlay={true}
        timer={500}
        animation={"fade"}
        indicators={true}
        timeout={500}
        navButtonsAlwaysVisible={false}
      >
        {
          items.map( (item, index) => {
              return <Item item={item} key={index}/>
          })
        }
      </Carousel>
      
      <AboutUsPage />
      <ServicesPage />
      <ContactPage />
    </div>
  );
}

export default Home;