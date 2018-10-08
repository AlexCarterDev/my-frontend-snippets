import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class AudioButton extends React.Component {
    componentDidMount() {
        console.log('AudioButton#' + this.props.buttonId + ': didMount');
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === this.props.keyCode) {
                this.props.clickHandler(event, this.props.audioDescr);
            }
        })
    }

    render() {
        console.log('AudioButton#' + this.props.buttonId + ': render');
        const onClickHandler = (event) => this.props.clickHandler(event, this.props.audioDescr);

        return (
            <button id={this.props.buttonId} onClick={onClickHandler}>
                {this.props.text}
                <audio>
                    <source src={this.props.audioSrc} />
                </audio>
            </button>
        )
    }
}

class App extends React.Component {

    log(event, text) {
        console.log('button clicked ' + text);
        console.log(event);
    }

    componentDidMount() {
        console.log('App: didMount');
    }

    render() {
        console.log('App: render');
        return(
            <div>
                <AudioButton 
                    buttonId='my-button' 
                    keyCode={87} 
                    text='test button'
                    audioSrc='#'
                    clickHandler={this.log} 
                    audioDescr='empty'/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));