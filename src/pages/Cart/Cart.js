import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

import { Grid, Button } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Cart.scss';

function Cart({ cart, cartTotal }) {
  return (
    <div className="cart container">
      <section>
        <h1>Shopping Cart</h1>
        <p>{cart?.length > 0 ? cart.length : '0'} Courses in Cart</p>
      </section>
      {(
          cart?.length > 0 ?
          <section className="cart-container">
            <Grid container spacing={4}>
              <Grid item xs={8}>
                {
                  cart ?
                  cart.map( item => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                  )) : ''
                }
              </Grid>
              <Grid item xs={4}>
                <p>Total:</p>
                <h1>€{ cartTotal }</h1>
                <Button
                  className="btn-purple"
                  type="button"
                  href="/checkout"
                >
                  checkout
                </Button>
              </Grid>
            </Grid>
          </section> : 
          <section className="cart-container">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <p>Your cart is empty. Keep shopping to find a course!</p>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="btn-orange"
                  type="button"
                >
                  <Link to="/#services">
                    go shoopping
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </section>
        )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Cart);