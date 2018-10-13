import React from 'react';

const SelectBankButton = ({id, text, onClick, checked}) => {
    console.log('SelectBankButton ' + id + ': render');
    var className = checked ? 
        'button-blue button-blue-active' : 
        'bank-pad-button-not-selected';

    return(
        <button 
            className={className}
            id={id}
            onClick={() => onClick(id)}
        >
            {text}
        </button>
    )
}

export default SelectBankButton;