import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

class Text extends React.Component {
    render() {
        return (
            <p id='text'>
                Curabitur in tortor mattis, hendrerit quam sit amet, 
                malesuada velit. Lorem ipsum dolor sit amet, consectetur.
            </p>
        );
    }
}

class Separator extends React.Component {
    render() {
        return (
            <div id='separator-container'>
                <div id='separator'></div>
            </div>
        );
    }
}

class Author extends React.Component {
    render() {
        return (
            <p id='author'>
                Lorem lorem
            </p>
        );
    }
}

class Buttons extends React.Component {
    render() {
        return(
            <div id='buttons'>
                <button id="tweet-quote">
                    <i className="fab fa-tumblr"></i>
                </button>
                <button id="tumblr-quote">
                    <i className="fab fa-twitter"></i>
                </button>
                <div id="buttons-free-space">
                </div>
                <button id="new-quote">
                    New quote
                </button>
            </div>
        );
    }
}

class QuoteBox extends React.Component {
    render() {
        return (
            <div id='quote-box'>
                <Text/>
                <Separator/>
                <Author/>
                <Buttons/>
            </div>
        );
    }
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
registerServiceWorker();
