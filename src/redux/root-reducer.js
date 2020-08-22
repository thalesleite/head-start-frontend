// import { combineReducers } from 'redux';

// import userReducer from './user/user.reducer';
// import cartReducer from './cart/cart.reducer';
// import courseReducer from './course/course.reducer';

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   courses: courseReducer
// });

import { combineReducers } from 'redux';

import courseReducer from './course/course.reducer';

export default combineReducers({
  courses: courseReducer
});