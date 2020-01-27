import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './../../containers/counter.css';
import BattleStatus from '../../components/BattleStatus/battleStatus';
import * as actionTypes from './../../store/actions';
import * as hits from './../../store/generatedVars';

class Counter extends Component {




    render() {

        return (
            <div>
                <div className="healthTab">
                    <CounterOutput value={this.props.heroHP} playerName="Hero" />
                    <CounterOutput value={this.props.bossHP} playerName="Boss" />
                </div>

                <BattleStatus />

                <CounterControl label="Hit" clicked={this.props.onHit} />
                <CounterControl label="Punch" clicked={this.props.onPunch} />
                <CounterControl label="Heal" clicked={this.props.onHeal} />
                <CounterControl label="Restart" clicked={this.props.onRestart} />
                <hr />
                <CounterControl label="Store Result" clicked={this.props.onStoreResult} />
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li
                            className="listItem"
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.val}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        heroHP: state.heroHP,
        bossHP: state.bossHP,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onHit: () => dispatch({ type: actionTypes.HIT, heroHit: hits.ordinaryHit(), enemyHit: hits.ordinaryHit() }),
        onPunch: () => dispatch({ type: actionTypes.PUNCH, heroPunch: hits.ordinaryPunch(), enemyHit: hits.ordinaryHit() }),
        onHeal: () => dispatch({ type: actionTypes.HEAL, heroHeal: hits.ordinaryHeal(), enemyHit: hits.ordinaryHit() }),
        onRestart: () => dispatch({ type: actionTypes.RESTART }),

        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
