import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

import AboutUsPage from '../AboutUs/AboutUs';
import ServicesPage from '../Services/Services';
import ContactPage from '../Contact/Contact';

import BkgHeadStart from '../../assets/HEAD-START.jpeg';
import BkgOne from '../../assets/carousell1.jpg';
import BkgTwo from '../../assets/carousell2.jpg';
import BkgThree from '../../assets/carousell3.jpg';
import BkgFour from '../../assets/carousell4.jpg';
import BkgFive from '../../assets/carousell5.jpg';
import BkgSix from '../../assets/carousell6.jpg';

import './Home.scss';

function Item({ item }) {
  return (
    <Paper 
        className="carousel-item"
        style={{ 
          backgroundColor: item.color,
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 55%"
        }}
        elevation={10}
    >      
      {
        ( item.type === 'head-start' ) 
        ? (
          <Button 
            className={`btn-${item.btnColor}-filled`} 
            href={`/#${item.linkTo}`} 
          >
            { item.btnDescription }
          </Button>
        ): ''
      }
      {
        ( item.type === 'regular' ) 
        ? (
          <div className="carousel-description">
            <div className="title" style={{color: item.titleColor }}>
              { item.title }
            </div>
            <div className="subtitle" style={{color: item.subtitleColor }}>
              { item.subtitle }
            </div>
            
            <Button 
              className={`btn-${item.btnColor}-filled`} 
              href={`/#${item.linkTo}`}
            >
              { item.btnDescription }
            </Button>
          </div>
        ): ''
      }
    </Paper>
  )
}

function Home() {
  const items = [
    {
      type: "head-start",
      title: "",
      subtitle: "",
      titleColor: "",
      subtitleColor: "",
      btnDescription: "Explore our services",
      btnColor: "orange",
      linkTo: "services",
      image: BkgHeadStart
    },
    {
      type: "regular",
      title: "COMBO: BARISTA + FOOD SAFETY COURSE",
      subtitle: "Your start in Ireland",
      titleColor: "#ffffff",
      subtitleColor: "#ffcc65",
      btnDescription: "Learn more",
      btnColor: "white",
      linkTo: "services",
      image: BkgOne
    },
    {
      type: "regular",
      title: "FOOD SAFETY - HACCP - LEVEL 1",
      subtitle: "Curso online em Protuguês",
      titleColor: "#ffffff",
      subtitleColor: "#ffcc65",
      btnDescription: "Saiba mais",
      btnColor: "pink",
      linkTo: "services",
      image: BkgTwo
    },
    {
      type: "regular",
      title: "FACE TO FACE BARIST COURSE (ENGLISH OR PORTUGUESE)",
      subtitle: "Fancy coffees?",
      titleColor: "#ffffff",
      subtitleColor: "#ffffff",
      btnDescription: "Be a Barista",
      btnColor: "pink",
      linkTo: "services",
      image: BkgThree
    },
    {
      type: "regular",
      title: "BARISTA + FOOD SAFETY + CVIEW",
      subtitle: "Combo to get a Head Start",
      titleColor: "#ffffff",
      subtitleColor: "#ffcc65",
      btnDescription: "Book now",
      btnColor: "pink",
      linkTo: "services",
      image: BkgFour
    },
    {
      type: "regular",
      title: `€5 OFF FOR YOU AND YOUR FRIENDS`,
      subtitle: "Let's start together?",
      titleColor: "#ffcc65",
      subtitleColor: "#3c1d5d",
      btnDescription: "Get an offer",
      btnColor: "pink",
      linkTo: "services",
      image: BkgFive
    },
    {
      type: "regular",
      title: "+5000 students in Ireland",
      subtitle: "Start your journey now",
      titleColor: "#ffffff",
      subtitleColor: "#ffcc65",
      btnDescription: "Contact Bartira",
      btnColor: "white",
      linkTo: "contact",
      image: BkgSix
    },
  ]

  return (
    <div id="main">
      <Carousel 
        className="carousel"
        autoPlay={true}
        timer={1000}
        animation={"fade"}
        indicators={true}
        timeout={1000}
        navButtonsAlwaysVisible={false}
      >
        {
          items.map( (item, index) => {
              return <Item item={item} key={index}/>
          })
        }
      </Carousel>
      
      <ServicesPage />
      <AboutUsPage />
      <ContactPage />
    </div>
  );
}

export default Home;