import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

import AboutUsPage from '../AboutUs/AboutUs';
import ServicesPage from '../Services/Services';
import ContactPage from '../Contact/Contact';

import BkgOne from '../../assets/HEAD-START.jpg';

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
          backgroundPosition: "50% 50%"
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
      name: "Head Start",
      description: "A PDF Reader specially.",
      type: "institutional",
      color: "#d1f8ff",
      image: BkgOne
    },
    {
      name: "Courses",
      description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
      type: "courses",
      color: "#1f2729",
      image: ""
    },
    {
      name: "Questions",
      description: "A exciting mobile game game made in the Unity Engine.",
      type: "questions",
      color: "#3c1d5d",
      image: "BkgOne"
    }
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