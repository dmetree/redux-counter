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
                <CounterControl label="Add X" clicked={ this.props.onIncCounter }  />
                <CounterControl label="Subtract X" clicked={ this.props.onDecCounter }  />
                <hr/>
                <button>Store Result</button>
                <ul>
                    <li></li>
                </ul>
            </div>
        );
    }
}


let getRandomN = () => {
    let number = (Math.floor(Math.random() * 6 + 1));
    return number
}


const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:  () => dispatch({ type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onIncCounter: () => dispatch({ type: 'INC', val: getRandomN() }),
        onDecCounter: () => dispatch({ type: 'DEC', val: getRandomN() })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
