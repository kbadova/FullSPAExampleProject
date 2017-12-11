const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementedCounter = state.counter + 1;
      return Object.assign({}, state, {counter: incrementedCounter});

    case 'DECREMENT':
      const decrementedCounter = state.counter - 1;
      return Object.assign({}, state, {counter: decrementedCounter});

    default:
      return state;
  }
};

export {counterReducer};
