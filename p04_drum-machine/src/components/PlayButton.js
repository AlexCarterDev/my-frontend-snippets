import React from 'react';

const PlayButton = ({id, text, src, keyCode, onClick}) => {
    console.log('PlayButton ' + id + ': render');


    var play = () => {
        console.log('PlayButton ' + id + ': play');
        new Audio(src).play();
        onClick();
    }

    var simulatePressButton = () => {
        var element = document.getElementById(id);
        element.classList.add('button-green-active');
        setTimeout(() => {
            element.classList.remove('button-green-active');
        }, 100);
    }

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === keyCode) {
            simulatePressButton();
            play();
        }
    });

    return (
        <button 
            id={id} 
            className={'button-green'}
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