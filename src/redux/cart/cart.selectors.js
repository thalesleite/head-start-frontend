import { createSelector } from 'reselect';
import { createStore } from 'redux';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCarHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQtty, cartItem) => accumalatedQtty + cartItem.quantity
    , 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQtty, cartItem) => accumalatedQtty + ( cartItem.quantity * cartItem.price )
    , 0)
);