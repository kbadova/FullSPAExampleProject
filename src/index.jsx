import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

import Counter from './components/Counter';
import UsersList from './containers/UsersList';

const store = createStore(allReducers);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter />
      <UsersList />
    </div>
  </Provider>,
  document.getElementById('root')
);
