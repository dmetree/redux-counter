import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={ this.props.onINC5Counter }  />
                <CounterControl label="Subtract 5" clicked={ this.props.onDEC5Counter }  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:  () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onINC5Counter: () => dispatch({ type: 'INC5', val: 5 }),
        onDEC5Counter: () => dispatch({ type: 'DEC5', val: 5  })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// if the container doesn't need  state (mapStateToProps) => null || actions (mapDispatchToProps) => delete