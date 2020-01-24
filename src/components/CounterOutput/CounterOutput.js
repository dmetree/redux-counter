import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    // <div className="CounterOutput">
    //     {props.playerName}: {props.value}
    // </div>
    <div className="CounterOutput">
        {props.playerName}: {props.value}
        <div className="health-bar">
            
        </div>
    </div>
);

export default counterOutput;