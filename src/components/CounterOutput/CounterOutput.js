import React from 'react';
import './CounterOutput.css';



const counterOutput = (props) => (
    <div className="CounterOutput">
        {props.playerName}: {props.value}
        <div className="health-bar">
            <div className="health-bar__heart" style={{ width: props.value + '%' }}></div>
        </div>
    </div>
);

export default counterOutput;