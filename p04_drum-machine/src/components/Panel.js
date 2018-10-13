import React from 'react';
import DisplayContainer from '../containers/DisplayContainer';
import BankPadContainer from '../containers/BankPadContainer';
import VolumeContainer from '../containers/VolumeContainer';

const Panel = () => {
    return (
        <div id='panel'>
            <DisplayContainer />
            <BankPadContainer />
            <VolumeContainer />
        </div>
    )
}

export default Panel