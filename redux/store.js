const {createStore} = Redux;
console.log('dsf');

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const render = () => {
  // <p>Click here</p>;
  document.body.innerText = store.getState();
};

store.subscribe(render);

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
