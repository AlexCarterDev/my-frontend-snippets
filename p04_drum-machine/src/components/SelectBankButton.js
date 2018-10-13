import React from 'react';

const SelectBankButton = ({id, text}) => {
    return(
        <button 
            className='button-blue'
            id={id}
        >
            {text}
        </button>
    )
}

export default SelectBankButton;