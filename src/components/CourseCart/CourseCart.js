import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import ConfirmCartItem from '../ConfirmCartItem/ConfirmCartItem';

import { addItem } from '../../redux/cart/cart.actions';

import './CourseCart.scss';

function CourseCart({ course, addItem, language }) {
  const text = language === 'EN' ? 'See more' : 'Veja mais';
  const btnText = language === 'EN' ? 'ADD TO CART' : 'Adicionar';

  const [hide, setHide] = useState(true);
  const [item, setItem] = useState(false);

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
                { text }
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
          onClick={ () => { 
            addItem(course);
            setItem(true);
          }}
          >{ btnText }
        </Button>
        
        {
          item ? (
            <ConfirmCartItem course={course} language={language} />
          ) : ''
        }
        
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => ({
  cartItems: state.cartItems
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: cartItems => dispatch(addItem(cartItems))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCart);