import React from 'react';
import increment from '../actions/increment';
import {Button} from 'reactstrap';

export default class Home extends React.Component {
  render() {
    return <Button onClick={store.disatch(increment)}>asdf</Button>;
  }
}
