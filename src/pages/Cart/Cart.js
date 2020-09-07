import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

import { Grid, Button, TextField } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './Cart.scss';

function Cart({ cart, cartTotal, language }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.cart : PT_DATA.sections.cart;

  return (
    <div className="cart container">
      <section>
        <h1>{ text[0] }</h1>
        <p>{cart?.length > 0 ? cart.length : '0'} { text[1] }</p>
      </section>
      {(
          cart?.length > 0 ?
          <section className="cart-container">
            <Grid container spacing={4}>
              <Grid item sm={8} xs={12}>
                {
                  cart ?
                  cart.map( item => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                  )) : ''
                }
              </Grid>
              <Grid item sm={4} xs={12}>
                <p>Total</p>
                <h1>€{ cartTotal }</h1>
                <Button
                  className="btn-purple"
                  type="button"
                  href="/checkout"
                >
                  { text[2] }
                </Button>
                <div className="coupon">
                  <TextField
                    id="coupon" 
                    label={ text[3] }
                    type="text"
                    //value={coupon}
                    //onChange={e => setCoupon(e.target.value)}
                  />
                  <Button
                    className="btn-coupon"
                    type="button"
                  >
                    { text[4] }
                  </Button>
                </div>
              </Grid>
            </Grid>
          </section> : 
          <section className="cart-container">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <p>{ text[5] }</p>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="btn-orange"
                  type="button"
                >
                  <Link to="/#services">
                    { text[6] }
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
  cartTotal: selectCartTotal,
  language: selectLanguage
});

export default connect(mapStateToProps)(Cart);