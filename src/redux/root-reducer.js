import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import courseReducer from './course/course.reducer';
import languageReducer from './language/language.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  courses: courseReducer,
  language: languageReducer
});