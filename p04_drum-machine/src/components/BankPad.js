import React from 'react';
import SelectBankButton from './SelectBankButton';

const BankPad = () => {
    const buttons = [];
    const texts = ['bank 1', 'bank 2', 'bank 3'];
    for (let i = 0; i < texts.length; i++) {
        buttons.push(
            <SelectBankButton 
                text={texts[i]}
                key={i}
                id={'bank-pad-' + i}/>
        );
    }

    return (
        <div id='bank-pad'>
            {buttons}
        </div>
    )
}

export default BankPad;