const initialState = {
  value: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = {
  type: INCREMENT,
  index: 1
};

export const decrement = {
  type: DECREMENT,
  index: 2
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const incrementedCounter = state.value + 1;
      return Object.assign({}, state, {value: incrementedCounter});

    case DECREMENT:
      const decrementedCounter = state.value - 1;
      return Object.assign({}, state, {value: decrementedCounter});

    default:
      return state;
  }
};

export default counterReducer;
