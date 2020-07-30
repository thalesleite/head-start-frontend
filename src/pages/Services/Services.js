import React, { useState } from 'react';

import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './Services.scss';

function Services() {
  const [course1, setCourse1] = useState(true);
  const [course2, setCourse2] = useState(true);
  const [course3, setCourse3] = useState(true);
  const [course4, setCourse4] = useState(true);
  const [course5, setCourse5] = useState(true);
  const [course6, setCourse6] = useState(true);

  return (
    <div 
      id="services" 
      className="container txt-center services"
    >
      <h1>SERVICES</h1>

      <h2>Online Courses</h2>
      <section className="services-cards line-bottom">
        <Card className="services-card">
          <CardContent>
            <h3 className="card-title txt-border">Food Safety - HACCP(Level 1)</h3>

            <div className="card-description">
              <div>
                <p>
                  The “Food Safety - HACCP  (Level 1)” course is being requested by Irish Government for those who want 
                  to work in the food sector.
                </p>
                <p>
                  The main advantage from other courses is that it was developed with an academic and entrepreneurial 
                  vision, by a professional who has been working and studying this market for almost a decade and, 
                  therefore, understands the requests of both owners and employees.
                </p>

                <div className={`card-link ${course1 ? '' : 'hide'}`}>
                  <a 
                    onClick={() => setCourse1(!course1)}
                  >
                    See more
                  </a>
                </div>
              </div>
              <div className={`${course1 ? 'hide' : ''}`}>
                <p>
                  Bartira had developed a practical content, solving the requirements from “Food Safety Authority of 
                  Ireland  (FSAI)” and following all the principes from HACCP System (Hazard Analysis & Critical Control 
                  Point).
                </p>
                <p>
                  At the moment, the online course is only available in Portuguese Language. A face to face course is 
                  available both in English or Portuguese.
                </p>
                <p>
                  At the end of this course, we will provide a Digital Certificate in "Food Safety -  HACCP - Level 1”, 
                  valid for 3 years in Ireland. In addition, the students will receive an e-book containing a course 
                  summary and tips about the irish food market that may contribute to their career journey.
                </p>
                <div className="card-link">
                    <a 
                      onClick={() => setCourse1(!course1)}
                    >
                      <ArrowBackIcon />
                    </a>
                </div>
              </div>
            </div>

            <div className="card-price">
              €40
            </div>
          </CardContent>
          
          <CardActions className="btn-container">
            <Button className="btn-orange">ADD TO CART</Button>
          </CardActions>
        </Card>
      </section>

      <h2>Face-to-face Courses</h2>
      <section className="services-cards">

      <Card className="services-card">
          <CardContent>
            <h3 className="card title txt-border">Barista Course by Bartira</h3>

            <div className="card-description">
              <div>
                <p>
                  In 2013, when Bartira was a manager in a coffee shop, she started teaching friends and 
                  customers who had requested for volunteer work as baristas. Since then, she has already 
                  qualified more than 5000 baristas in all Ireland. 
                </p>
                <p>
                  With a strong reputation in the market, the Barista Course by Bartira has offered the 
                  right tools to impact the lives of many students who have been able to improve their 
                  life standards after getting their first job as a barista.
                </p>

                <div className={`card-link ${course2 ? '' : 'hide'}`}>
                  <a 
                    onClick={() => setCourse2(!course2)}
                  >
                    See more
                  </a>
                </div>
              </div>
              <div className={`${course2 ? 'hide' : ''}`}>
                <p>
                  In this face to face course with 4h30, the student will learn about the history 
                  of coffee, and develop all skills to know, by practicing, how to prepare the most 
                  requested drinks such as: 
                </p>
                <p>
                  Cappuccino, Macchiato, Americano, Latte, Hot Chocolate, Mocha, Espresso, Flat White and
                  Ristretto.
                </p>
                <p>
                  Furthermore, in her stylish coffee shop located in Dublin city center, Bartira will t
                  each about the coffee machine, coffee art techniques, milk texture, coffee grounds and 
                  all the necessary skills to become a barista.
                </p>
                <p>
                  At the end of this course, the student will receive a Digital Certificate as "Barista”. 
                  In addition, we will provide an e-book containing a course summary and tips about coffee 
                  shops around Ireland that may contribute to their career journey.
                </p>
                <p>
                  The materials for the course are included and the students could make and taste all 
                  their own drinks. The Barista Course follows The Speciality Coffee Association of 
                  Europe (SCAE) principles, where Bartira got her professional certification. 
                </p>
                <div className="card-link">
                    <a 
                      onClick={() => setCourse2(!course2)}
                    >
                      <ArrowBackIcon />
                    </a>
                </div>
              </div>
            </div>

            <div className="card-price">
              €40
            </div>
          </CardContent>
          
          <CardActions className="btn-container">
            <Button className="btn-orange">ADD TO CART</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3 className="txt-border">CVIEW</h3>

            <div className="card-description">
              <div>
                <p>
                  The CVIEW project was created after many requests, especially from students who wanted to 
                  get a job but had no idea how to start or even create a Curriculum Vitae (CV). 
                </p>
                <p>
                  This online service will think and design your C.V., through the support of an 
                  Entrepreneur, who will have a chat to understand your characteristics, skills, goals, 
                  professional and personal experiences and qualifications to help you in your journey to 
                  get a job in Ireland.
                </p>

                {/* <div className={`card-link ${course3 ? '' : 'hide'}`}>
                  <a 
                    onClick={() => setCourse3(!course3)}
                  >
                    See more
                  </a>
                </div> */}
              </div>
              {/* <div className={`${course3 ? 'hide' : ''}`}>
                <p>
                  Bartira had developed a practical content, solving the requirements from “Food Safety Authority of 
                  Ireland  (FSAI)” and following all the principes from HACCP System (Hazard Analysis & Critical Control 
                  Point).
                </p>
                <div className="card-link">
                    <a 
                      onClick={() => setCourse3(!course3)}
                    >
                      <ArrowBackIcon />
                    </a>
                </div>
              </div> */}
            </div>

            <div className="card-price">
              €40
            </div>
          </CardContent>
          
          <CardActions className="btn-container">
            <Button className="btn-orange">ADD TO CART</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3 className="txt-border">Combo Start</h3>

            <div className="card-description">
              <div>
                <p>
                  Barista Course (face to face) + Food Safety (online) for €55.
                </p>
                <p>
                  Getting this combo, you will receive an online Food Safety training and also a face to face Barista training. 
                </p>

                <div className={`card-link ${course4 ? '' : 'hide'}`}>
                  <a 
                    onClick={() => setCourse4(!course4)}
                  >
                    See more
                  </a>
                </div>
              </div>
              <div className={`${course4 ? 'hide' : ''}`}>
                <p>
                  With both certifications, you will be able to work in all the irish food sectors such as 
                  coffee shops, bakeries, supermarkets, restaurants and much more. 
                </p>
                <p>
                  We are looking forward to seeing you!
                </p>
                <div className="card-link">
                    <a 
                      onClick={() => setCourse4(!course4)}
                    >
                      <ArrowBackIcon />
                    </a>
                </div>
              </div>
            </div>

            <div className="card-price">
              €55
            </div>
          </CardContent>
          
          <CardActions className="btn-container">
            <Button className="btn-orange">ADD TO CART</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3 className="txt-border">Combo Head Start</h3>

            <div className="card-description">
              <div>
                <p>
                  Barista Course (face to face) + Food Safety (online) + CVIEW for €75.
                </p>
                <p>
                  This is a premium combo to prepare you with all the important skills to become a 
                  successful professional in the food sector.
                </p>

                <div className={`card-link ${course5 ? '' : 'hide'}`}>
                  <a 
                    onClick={() => setCourse5(!course5)}
                  >
                    See more
                  </a>
                </div>
              </div>
              <div className={`${course5 ? 'hide' : ''}`}>
                <p>
                  With the Head Start Combo you will have a discount in our online Food Safety training, 
                  a face to face Barista training and a Curriculum Vitae support to get the perfect head 
                  start in your journey. Are you ready?
                </p>
                <div className="card-link">
                    <a 
                      onClick={() => setCourse5(!course5)}
                    >
                      <ArrowBackIcon />
                    </a>
                </div>
              </div>
            </div>

            <div className="card-price">
              €75
            </div>
          </CardContent>
          
          <CardActions className="btn-container">
            <Button className="btn-orange">ADD TO CART</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3 className="txt-border">Combo Stars</h3>

            <div className="card-description">
              <div>
                <p>
                  From groups of 5 or more students, we are offering €5 discount each in any service.
                </p>
                <p>
                  Join the courses with your friends and start growing together!
                </p>

                {/* <div className={`card-link ${course6 ? '' : 'hide'}`}>
                  <a 
                    onClick={() => setCourse6(!course6)}
                  >
                    See more
                  </a>
                </div> */}
              </div>
              {/* <div className={`${course6 ? 'hide' : ''}`}>
                <p>
                  Bartira had developed a practical content, solving the requirements from “Food Safety Authority of 
                  Ireland  (FSAI)” and following all the principes from HACCP System (Hazard Analysis & Critical Control 
                  Point).
                </p>
                <div className="card-link">
                    <a 
                      onClick={() => setCourse6(!course6)}
                    >
                      <ArrowBackIcon />
                    </a>
                </div>
              </div> */}
            </div>

            <div className="card-price">
              €40
            </div>
          </CardContent>
          
          <CardActions className="btn-container">
            <Button className="btn-orange">ADD TO CART</Button>
          </CardActions>
        </Card>

      </section>
    </div>
  );
}

export default Services;