import React from 'react'

const Display = ({action, bankIndex, sampleDescription, volume}) => {
    var text;

    console.log(action);
    switch (action) {
        case 'volume': {
            text = 'vol: ' + volume;
            break;
        }
        case 'bankIndex': {
            text = 'selB: ' + (bankIndex + 1);
            break;
        }
        case 'sampleDescription': {
            text = sampleDescription;
            break;
        }
        default: {
            text = 'Hello'
        }
    }

    return (
        <div id='display-container'>
        <span id='display'>{text}</span>
        </div>
    )
}

export default Display