import React from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import {increment, decrement} from 'modules/counter';

class Counter extends React.Component {
  render() {
    const {counter} = this.props;
    console.log('store in home', this.props);
    console.log('increment', this.props.dispatch);
    return (
      <div>
        <h1>Counter {counter.value}</h1>
        <Button onClick={() => this.props.increment()}> + </Button>
        <Button onClick={() => this.props.decrement()}> - </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
