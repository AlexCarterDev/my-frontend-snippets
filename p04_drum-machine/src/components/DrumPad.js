import React from 'react';
import PlayButton from './PlayButton'

const DrumPad = ({bank, playButtonClicked}) => {
    console.log('DrumPad: render');
    const texts = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    const keyCodes = [];
    for (let i = 0; i < texts.length; i++) {
        keyCodes.push(texts[i].charCodeAt(0));
    }

    let buttons = [];
    for (let i = 0; i < texts.length; i++) {
        
        buttons.push(
            <PlayButton 
                key={i}
                text={texts[i]}
                id={'drum-pad-' + i}
                src={bank.samples[i].url}
                keyCode={keyCodes[i]}
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