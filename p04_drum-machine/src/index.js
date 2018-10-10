import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';



// --- React Components ---

class AudioButton extends React.Component {
    render() {
        console.log('AudioButton ' + this.props.id + ': render');

        return (
            <button id={this.props.id} className={this.props.className}>
                {this.props.text}
                <audio>
                    <source src='#' />
                </audio>
            </button>
        )
    }
}


class DrumPad extends React.Component {

    constructor(props) {
        super(props);
        this.buttons = this.createAudioButtons(9);
    }

    createAudioButtons(n) {
        var texts = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
        let buttons = [];
        for (let i = 0; i < n; i++) {
            buttons.push(
                <AudioButton 
                    key={i}
                    text={texts[i]}
                    id={'drum-pad-' + i}
                    className='button-green'/>
            );
        }

        return buttons;
    }

    render() {
        return(
            <div id='drum-pad'>
                {this.buttons}
            </div>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <div id='title-container'>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

class Display extends React.Component {
  render() {
    return (
      <div id='display-container'>
        <span id='display'>display</span>
      </div>
    )
  }
}

class SelectBankButton extends React.Component {

    render() {
        
        return(
            <button 
                className='button-blue'
                id={this.props.id}>{this.props.text}</button>
        )
    }
}

class BankPad extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = this.createSelectButtons(3);
    }

    createSelectButtons(n) {
        let buttons = [];
        let texts = ['bank 1', 'bank 2', 'bank 3'];
        for (let i = 0; i < n; i++) {
            buttons.push(
                <SelectBankButton 
                    text={texts[i]}
                    key={i}
                    id={'bank-pad-' + i}/>
            );
        }

        return buttons;
    }

    render() {
      return (
        <div id='bank-pad'>
            {this.buttons}
        </div>
      )
    }
  }

class Volume extends React.Component {
    render() {
        return (
            <div id='slider-container'>
                    <input type="range" min="1" max="100" className="slider" />
            </div>
        )
    }
}

class Panel extends React.Component {
    render() {
        return (
            <div id='panel'>
                <Display />
                <BankPad />
                <Volume />
            </div>
        );
    }
}

class App extends React.Component {
    componentDidMount() {
        console.log('App: didMount');
    }

    render() {
        console.log('App: render');
        return(
            <div id='drum-machine'>
                <Title title='Drum machine' />
                <Panel />
                <DrumPad />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));