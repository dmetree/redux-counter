import React, { Component } from 'react';
import { connect } from 'react-redux';
import './battleStatus.css';

class battleStatus extends Component {

    render() {
        let post = <p className='statusHolder' >Fight  !!!</p>;
        
        if (this.props.heroHP <= 0 && this.props.bossHP >= 0) {
            post = <p className='statusHolder' >You lost... Game Over</p>;

        } else if (this.props.heroHP >= 0 && this.props.bossHP <= 0)  {
            post = <p className='statusHolder' >You WON !!! Game Over</p>;

        } else if (this.props.heroHP <= 0 && this.props.bossHP <= 0)  {
            post = <p className='statusHolder' >It's over... Game Over</p>;
        }
        return post;
    }
}

const mapStateToProps = state => {
    return {
        heroHP: state.heroHP,
        bossHP: state.bossHP,
        storedResults: state.results
    };
}

export default connect(mapStateToProps)(battleStatus);