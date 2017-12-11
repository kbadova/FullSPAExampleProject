import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {counterReducer} from './reducers/counterReducer';
import Home from './components/Home';

const store = createStore(counterReducer);

ReactDOM.render(<Home />, document.getElementById('root'));
