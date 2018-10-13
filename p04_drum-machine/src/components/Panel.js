import React from 'react';
import Display from './Display';
import BankPadContainer from '../containers/BankPadContainer';
import Volume from './Volume';

const Panel = () => {
    return (
        <div id='panel'>
            <Display />
            <BankPadContainer />
            <Volume />
        </div>
    )
}

export default Panel