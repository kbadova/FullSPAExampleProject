const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementedCounter = state.value + 1;
      return Object.assign({}, state, {value: incrementedCounter});

    case 'DECREMENT':
      const decrementedCounter = state.value - 1;
      return Object.assign({}, state, {value: decrementedCounter});

    default:
      return state;
  }
};

export default counterReducer;
