const {createStore} = Redux;
console.log('dsf');

const render = () => {
  <p>Click here</p>;
  document.body.innerText = store.getState();
};

store.subscribe(render);

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
