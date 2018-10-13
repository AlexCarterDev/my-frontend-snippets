import React from 'react';
import DisplayContainer from '../containers/DisplayContainer';
import BankPadContainer from '../containers/BankPadContainer';
import Volume from './Volume';

const Panel = () => {
    return (
        <div id='panel'>
            <DisplayContainer />
            <BankPadContainer />
            <Volume />
        </div>
    )
}

export default Panel