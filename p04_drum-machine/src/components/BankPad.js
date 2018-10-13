import React from 'react';
import SelectBankButton from './SelectBankButton';


export default class BankPad extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(id) {
        var n = parseInt(id.substring(id.length - 1), 10);
        this.props.selectBank(n);
    }

    render() {
        console.log('BankPad: render');
        const buttons = [];
        const texts = ['bank 1', 'bank 2', 'bank 3'];

        for (let i = 0; i < texts.length; i++) {
            buttons.push(
                <SelectBankButton 
                    text={texts[i]}
                    key={i}
                    id={'bank-pad-' + i}
                    onClick={this.clickHandler}
                    checked={i === this.props.bankIndex} />
            );
        }

        return (
            <div>
                {buttons}
            </div>
        )
    }
}