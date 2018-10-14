import React from 'react';
import PlayButton from './PlayButton'
import { getBankByIndex } from '../bank'

const DrumPad = ({bankIndex, playButtonClicked, volume}) => {
    console.log('DrumPad: render');
    const texts = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    var bank = getBankByIndex(bankIndex);
    const keyCodes = [];
    for (let i = 0; i < texts.length; i++) {
        keyCodes.push(texts[i].charCodeAt(0));
    }

    let buttons = [];
    for (let i = 0; i < texts.length; i++) {
        
        buttons.push(
            <PlayButton 
                key={i}
                volume={volume}
                text={texts[i]}
                id={'drum-pad-' + i}
                src={bank.samples[i].url}
                keyCode={keyCodes[i]}
                description={bank.samples[i].description}
                onClick={() => playButtonClicked(bank.samples[i].description)}
            />
        );
    }


    return(
        <div id='drum-pad'>
            {buttons}
        </div>
    )
}

export default DrumPad