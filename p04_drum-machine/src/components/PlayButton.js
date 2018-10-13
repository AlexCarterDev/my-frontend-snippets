import React from 'react';

const PlayButton = ({id, cls, text, src, keyCode, onClick}) => {
    console.log('PlayButton ' + id + ': render');

    var play = () => {
        console.log('PlayButton ' + id + ': play');
        new Audio(src).play();
        onClick();
    }

    document.addEventListener('keydown', (event) => {
        if (event.keyCode === keyCode) {
            play();
        }
    });

    return (
        <button 
            id={id} 
            className={cls}
            onClick={play}
        >
            {text}
            <audio>
                <source src={src} />
            </audio>
        </button>
    )
}

export default PlayButton;