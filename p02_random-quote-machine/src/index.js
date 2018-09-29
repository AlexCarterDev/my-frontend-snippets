import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

function getRandomHue() {
    return Math.floor(Math.random() * 360);
}

class Text extends React.Component {
    render() {
        return (
            <p id='text'>
                {this.props.text}
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
                {this.props.author}
            </p>
        );
    }
}

class Buttons extends React.Component {

    getTweetURL(text,author) {
        var url;
        if (text !== '') {
            url = 'https://twitter.com/intent/tweet?text="' + 
                encodeURIComponent(text) + '" ' + encodeURIComponent(author + ' #quotes');
        } else {
            url = '#';
        }
        return url;
    }

    getTumblrUrl(text,author) {
        var url;
        if (text !== '') {
            url = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+ 
                encodeURIComponent(author)+'&content=' + encodeURIComponent(text) + 
                '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
        } else {
            url = '#';
        }
        return url;
    }
    render() {
        var tweetUrl = this.getTweetURL(this.props.text, this.props.author);
        var tumblrUrl = this.getTumblrUrl(this.props.text, this.props.author);
        var btnStyle = {
            background: this.props.btnBackground,
        };
        return(
            <div id='buttons'>
                <a id="tweet-quote" href={tweetUrl} target='_blank' style={btnStyle}>
                    <i className="fab fa-twitter"></i>
                </a>
                <a id="tumblr-quote" href={tumblrUrl} target='_blank' style={btnStyle}>
                    <i className="fab fa-tumblr"></i>
                </a>
                <div id="buttons-free-space">
                </div>
                <button id="new-quote" onClick={this.props.randomQuote} style={btnStyle}>
                    New quote
                </button>
            </div>
        );
    }
}

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: '',
            btnBackground: 'white'
        }
        this.updateQuote = this.updateQuote.bind(this);
        this.getRandomQuoteFromApi = this.getRandomQuoteFromApi.bind(this);
        this.randomizeColors = this.randomizeColors.bind(this);
    }
    updateQuote(text,author) {
        this.setState({
            text: text,
            author: author,
        });
    }
    getRandomQuoteFromApi() {
        this.randomizeColors();
        return fetch('https://talaikis.com/api/quotes/random/')
            .then((response) => response.json())
            .then((json) => {
                this.updateQuote(json.quote, json.author);
            }).catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.randomizeColors();
        this.getRandomQuoteFromApi();
    }
    
    randomizeColors() {
        // h: 32, s: 5, b: 100
        var hue = getRandomHue();
        document.body.style.backgroundColor = 'hsl(' + hue + ', 100%, 97.5%)';
        // consider opacity
        var btnBackground = 'hsl(' + hue + ', 100%, 40%)';
        this.setState({
            btnBackground: btnBackground
        });
    }
    render() {
        return (
            <div id='quote-box'>
                <Text text={this.state.text}/>
                <Separator/>
                <Author author={this.state.author}/>
                <Buttons text={this.state.text} author={this.state.author}
                    randomQuote={this.getRandomQuoteFromApi} btnBackground={this.state.btnBackground}/>
            </div>
        );
    }
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
registerServiceWorker();
