import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './modules';

import Counter from './pages/Counter';
import UserList from './pages/UserList';
import BookingList from './pages/BookingList';

const store = createStore(reducers);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter />
      <UserList />
      <BookingList />
    </div>
  </Provider>,
  document.getElementById('root')
);
