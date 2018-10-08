import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';



// --- React Components ---

class AudioButton extends React.Component {
    render() {
        console.log('AudioButton ' + this.props.id + ': render');

        return (
            <button id={this.props.id}>
                X
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
        let buttons = [];
        for (let i = 0; i < n; i++) {
            buttons.push(
                <AudioButton 
                    key={i}
                    id={'drum-pad-' + i}/>
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
      <div>
        <span>display</span>
      </div>
    )
  }
}

class SelectBankButton extends React.Component {
    render() {
        return(
            <button id={this.props.id}>bank</button>
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
        for (let i = 0; i < n; i++) {
            buttons.push(
                <SelectBankButton 
                    key={i}
                    id={'bank-pad-' + i}/>
            );
        }

        return buttons;
    }

    render() {
      return (
        <div>
            {this.buttons}
        </div>
      )
    }
  }

  class Volume extends React.Component {
    render() {
      return (
        <div>
          volume
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
            <div>
                <Title title='Drum machine' />
                <Panel />
                <DrumPad />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));