import React from 'react';
import ReactDOM from 'react-dom';


const PlayButton = ({id, cls, text, src, onClick}) => {
    console.log('PlayButton ' + id + ': render');
    return (
        <button 
            id={id} 
            className={cls}
            onClick={onClick}
        >
            {text}
            <audio>
                <source src={src} />
            </audio>
        </button>
    )
}

const DrumPad = ({samples, playButtonClicked}) => {
    var texts = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    let buttons = [];
    for (let i = 0; i < texts.length; i++) {
        buttons.push(
            <PlayButton 
                key={i}
                text={texts[i]}
                id={'drum-pad-' + i}
                cls='button-green'
                // src={samples[i].url}
                // onClick={() => playButtonClicked(samples[i].description)}
            />
        );
    }

    return(
        <div id='drum-pad'>
            {buttons}
        </div>
    )
}

const Title = ({title}) => {
    return (
        <div id='title-container'>
            <h2>{title}</h2>
        </div>
    )
}

const Display = () => {
    return (
        <div id='display-container'>
          <span id='display'>display</span>
        </div>
    )
}

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

const BankPad = () => {
    const buttons = [];
    const texts = ['bank 1', 'bank 2', 'bank 3'];
    for (let i = 0; i < texts.length; i++) {
        buttons.push(
            <SelectBankButton 
                text={texts[i]}
                key={i}
                id={'bank-pad-' + i}/>
        );
    }

    return (
        <div id='bank-pad'>
            {buttons}
        </div>
    )
}

const Volume = () => {
    return (
        <div id='slider-container'>
            <input type="range" min="1" max="100" className="slider" />
        </div>
    )
}

const Panel = () => {
    return (
        <div id='panel'>
            <Display />
            <BankPad />
            <Volume />
        </div>
    )
}

const App = () => {
    console.log('App: render');
    return(
        <div id='drum-machine'>
            <Title title='Drum machine' />
            <Panel />
            <DrumPad />
        </div>
    )
}

export default App