import React, { Component } from 'react';
import { connect } from 'react-redux';

class battleStatus extends Component {

    render() {
        let post = <p style={{ textAlign: 'center' }} >Fight  !!!</p>;
        
        if (this.props.heroHP <= 0 && this.props.bossHP >= 0) {
            post = <p style={{ textAlign: 'center' }} >You lost...</p>;

        } else if (this.props.heroHP >= 0 && this.props.bossHP <= 0)  {
            post = <p style={{ textAlign: 'center' }} >You WON !!!</p>;

        } else if (this.props.heroHP <= 0 && this.props.bossHP <= 0)  {
            post = <p style={{ textAlign: 'center' }} >It's over...</p>;
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