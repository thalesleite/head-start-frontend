import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useHistory } from 'react-router-dom';

import { loadStripe } from "@stripe/stripe-js";

import api from '../../services/api';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { Grid, Button, TextField } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import './Cart.scss';

function Cart({ cart, cartTotal, language, currentUser }) {
  // getting language text
  const text = language === 'EN' ? EN_DATA.sections.cart : PT_DATA.sections.cart;
  const stripePromise = loadStripe("pk_test_51HRaroIVkTQz2SNYCwAaRdPcRiuAT2h2sZdqY394khVXXO6buIJlfIR6EIes9ylqDWuGYIgCxoJsGJJa9aoJzHgX00H3Yj6P8w");
  
  const [voucher, setVoucher] = useState('');
  const [checkTotal, setCheckTotal] = useState(cartTotal);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  async function handleClick(event) {
    event.preventDefault();

    if ( currentUser ) {
      const total = `${checkTotal}`.replace('.', '').padEnd(4, 0);
      localStorage.setItem('userCart', JSON.stringify(cart));

      const stripe = await stripePromise;
      const session = await api.post('/payment-session', { total });
      await stripe.redirectToCheckout({
        sessionId: session.data.id,
      });

    } else {
      history.push('/login');
    }
  }

  function handleValidVoucher(event) {
    event.preventDefault();
    
    if ( cart ) {
      const online = cart.find(course => course.type === 'online');

      if ( online ) {
        if ( voucher === 'INTERCAMBIO' ||
             voucher === 'SEDA' ||
             voucher === 'BLUE' ||
             voucher === 'EGALI7' ||
             voucher === 'BARISTACOURSEBYBARTIRA'
        ) {
          const discount = voucher === 'BARISTACOURSEBYBARTIRA' ? 10 : 5;
          setCheckTotal(cartTotal - discount);
          setIsValid(true);

        } else {
          setVoucher('');
        }
      }
    }
  }

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
                    <CheckoutItem key={item._id} cartItem={item}/>
                  )) : ''
                }
              </Grid>
              <Grid item sm={4} xs={12}>
                <p>Total</p>
                <h1>€{ checkTotal }</h1>
                <Button
                  className="btn-purple"
                  type="button"
                  onClick={ handleClick }
                >
                  { text[2] }
                </Button>
                < div className="voucher" >
                  <TextField
                    id="voucher"
                    className = "input-voucher"
                    label={ text[3] }
                    type="text"
                    value={voucher}
                    onChange={e => setVoucher(e.target.value)}
                    disabled={isValid}
                  />
                  <Button
                    className = "btn-voucher"
                    type="button"
                    onClick={ handleValidVoucher }
                  >
                    { isValid ? 'APPLIED' : text[4] }
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
  language: selectLanguage,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Cart);