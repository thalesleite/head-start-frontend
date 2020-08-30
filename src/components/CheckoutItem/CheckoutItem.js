import React from 'react';
import { connect } from 'react-redux';

import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
    const { name, price } = cartItem;

    return (
        <div className="checkout-item">
          <span className="name">Course: { name }</span>
          <span className="remove-button" onClick={() => clearItem(cartItem)}>
            <RemoveCircleOutlineOutlinedIcon />
          </span>
          <span className="price">€{ price }</span>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);