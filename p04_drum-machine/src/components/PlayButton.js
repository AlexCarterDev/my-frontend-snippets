import React from 'react';

const PlayButton = ({id, cls, text, src, onClick}) => {
    console.log('PlayButton ' + id + ': render');
    return (
        <button 
            id={id} 
            className={cls}
            onClick={() => {
                new Audio(src).play();
                onClick();
            }}
        >
            {text}
            <audio>
                <source src={src} />
            </audio>
        </button>
    )
}

export default PlayButton;