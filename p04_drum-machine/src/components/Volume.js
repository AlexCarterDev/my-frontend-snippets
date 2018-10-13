import React from 'react';

const Volume = () => {
    return (
        <div id='slider-container'>
            <input type="range" min="1" max="100" className="slider" />
        </div>
    )
}

export default Volume;