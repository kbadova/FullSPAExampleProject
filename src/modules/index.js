import {combineReducers} from 'redux';
import usersReducer from './users';
import counterReducer from './counter';
import bookingsReducer from './bookings';

const allReducers = combineReducers({
  users: usersReducer,
  counter: counterReducer,
  bookings: bookingsReducer
});

export default allReducers;
