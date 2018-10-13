import React from 'react';
import Display from './Display';
import BankPad from './BankPad';
import Volume from './Volume';

const Panel = () => {
    return (
        <div id='panel'>
            <Display />
            <BankPad />
            <Volume />
        </div>
    )
}

export default Panel