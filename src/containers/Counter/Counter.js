import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from './../../store/actions';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add X" clicked={this.props.onIncCounter} />
                <CounterControl label="Subtract X" clicked={this.props.onDecCounter} />
                <hr />
                {/* <button onClick={ this.props.onIncrementCounter } >IncrementCopy</button> */}
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id) }>{strResult.val}</li>
                    ))}

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
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onIncCounter: () => dispatch({ type: actionTypes.INC, val: getRandomN() }),
        onDecCounter: () => dispatch({ type: actionTypes.DEC, val: getRandomN() }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
