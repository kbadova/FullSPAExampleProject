import {combineReducers} from 'redux';
import usersReducer from './users';
import counterReducer from './counterReducer';

const allReducers = combineReducers({
  users: usersReducer,
  counter: counterReducer
});

export default allReducers;
