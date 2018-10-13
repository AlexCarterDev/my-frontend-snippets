import React from 'react';
import SelectBankButton from './SelectBankButton';


export default class BankPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBank: 0
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(id) {
        var bank = 0;
        var n = parseInt(id.substring(id.length - 1), 10);
        this.setState({
            selectedBank: n
        })
    }

    render() {
        const buttons = [];
        const texts = ['bank 1', 'bank 2', 'bank 3'];

        for (let i = 0; i < texts.length; i++) {
            buttons.push(
                <SelectBankButton 
                    text={texts[i]}
                    key={i}
                    id={'bank-pad-' + i}
                    onClick={this.clickHandler}
                    checked={i === this.state.selectedBank} />
            );
        }

        return (
            <div>
                {buttons}
            </div>
        )
    }
}