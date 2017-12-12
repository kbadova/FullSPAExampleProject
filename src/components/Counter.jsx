import React from 'react';
import increment from './../actions/counterActions';
import {Button} from 'reactstrap';

export default class Counter extends React.Component {
  render() {
    const {store} = this.props;
    console.log('store in home', store);
    return (
      <div>
        <h1>Counter</h1>
        {/*sads<Button onClick={store.dispatch({type: 'INCREMENT'})}>asdf</Button>*/}
      </div>
    );
  }
}
