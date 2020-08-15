import React, { useState } from 'react';

import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './CourseCart.scss';

function CourseCart({ course, addCart }) {
  const [hide, setHide] = useState(true);

  return (
    <Card className="card">
      <CardContent>
        <h3 className="card-title txt-border">{course?.name}</h3>

        <div className="card-description">
          
          <div>
            <p>{course?.description1}</p>

            <div className={`card-link ${( hide && course?.description2 ) ? '' : 'hide'}`}>              
              <a 
                onClick={() => setHide(!hide)}
              >
                See more
              </a>
            </div>
          </div>

          <div className={`${hide ? 'hide' : ''}`}>
            <p>{course?.description2}</p>
            <div className="card-link">
                <a 
                  onClick={() => setHide(!hide)}
                >
                  <ArrowBackIcon />
                </a>
            </div>
          </div>

        </div>

        <div className="card-price">
          €{course.price}
        </div>
      </CardContent>
      
      <CardActions className="btn-container">
        <Button 
          className="btn-orange"
          onClick={ () => { addCart(course) }}
          >ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCart;