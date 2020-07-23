import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

import AboutUsPage from '../AboutUs/AboutUs';
import CoursesPage from '../Courses/Courses';
import ContactPage from '../Contact/Contact';

import './Home.scss';

function Item(props) {
  return (
    <Paper 
        className="carousel-item"
        style={{ backgroundColor: props.item.color }}
        elevation={10}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      
      {
        ( props.item.type === 'questions' ) 
        ? (
          <Button className="btn-check">
            Check it out!
          </Button>
        ): ''
      }
    </Paper>
  )
}

function Home() {
  const items = [
    {
      name: "Lear Music Reader",
      description: "A PDF Reader specially designed for musicians.",
      type: "institutional",
      color: "#64ACC8"
    },
    {
      name: "Hash Code 2019",
      description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
      type: "courses",
      color: "#7D85B1",
    },
    {
      name: "Terrio",
      description: "A exciting mobile game game made in the Unity Engine.",
      type: "questions",
      color: "#CE7E78",
    }
  ]

  return (
    <div>
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
      <CoursesPage />
      <ContactPage />
    </div>
  );
}

export default Home;