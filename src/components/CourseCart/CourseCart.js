import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//import ConfirmCartItem from '../ConfirmCartItem/ConfirmCartItem';

import { addItem } from '../../redux/cart/cart.actions';

import './CourseCart.scss';

function CourseCart({ course, addItem, language }) {
  const text = language === 'EN' ? 'See more' : 'Veja mais';
  const btnText = language === 'EN' ? 'ADD TO CART' : 'Adicionar';
  const description1 = language === 'EN' ? course?.description1 : course?.description1_pt;
  const description2 = language === 'EN' ? course?.description2 : course?.description2_pt;

  const [hide, setHide] = useState(true);
  //const [item, setItem] = useState(false);
  const history = useHistory();

  return (
    <Card className="card">
      <CardContent>
        <h3 className="card-title txt-border">{course?.name}</h3>

        <div className="card-description">
          
          <div>
            <p>{ description1 }</p>

            <div className={`card-link ${( hide && description2 ) ? '' : 'hide'}`}>              
              <a 
                onClick={() => setHide(!hide)}
              >
                { text }
              </a>
            </div>
          </div>

          <div className={`${hide ? 'hide' : ''}`}>
            <p>{ description2 }</p>
            <div className="card-link">
                <a 
                  onClick={() => setHide(!hide)}
                >
                  <ArrowBackIcon />
                </a>
            </div>
          </div>

        </div>

        {
          course?.price !== 0 ?
          (
            <div className="card-price">
              €{course.price}
            </div> 
          ) : ''
        }
      </CardContent>
      
      <CardActions className="btn-container">
        {
          course?.price !== 0 ?
          (
            <Button 
              className="btn-orange"
              onClick={ () => { 
                addItem(course);
                history.push('/cart');
              }}
              >{ btnText }
            </Button>
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