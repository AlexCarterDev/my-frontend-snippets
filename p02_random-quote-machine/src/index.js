import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function getRandomHue() {
    return Math.floor(Math.random() * 360);
}

var quotes;

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
        this.randomizeColors = this.randomizeColors.bind(this);
        this.getRandomQuotes = this.getRandomQuotes.bind(this);
    }
    updateQuote(text,author) {
        console.log('quote-box updateQuote');
        this.setState({
            text: text,
            author: author,
        });
    }
  
    getRandomQuote() {
      return quotes[Math.floor(Math.random()*quotes.length)];
    }
    getRandomQuotes() {
      this.randomizeColors();
      if (typeof quotes !== 'undefined') {
        var quote = this.getRandomQuote();
        this.updateQuote(quote.author, quote.quote);
      } else {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then((response) => response.json())
            .then((json) => {
              quotes = json.quotes;
              var quote = this.getRandomQuote();
              console.log('Quotes: ', quote.author);
              this.updateQuote(quote.author, quote.quote);
            })
            .catch((error) => {
              console.error(error);
            })
      }
    }
    componentDidMount() {
        console.log('quote-box componentDidMount');        
        this.getRandomQuotes();
      
    }
    
    randomizeColors() {
        console.log('quote-box randomizeColors');
        var hue = getRandomHue();
        document.body.style.backgroundColor = 'hsl(' + hue + ', 100%, 97.5%)';
        // consider opacity
        var btnBackground = 'hsl(' + hue + ', 100%, 40%)';
        this.setState({
            btnBackground: btnBackground
        });
    }
    render() {
        console.log('quote-box render');
        return (
            <div id='quote-box'>
                <Text text={this.state.text}/>
                <Separator/>
                <Author author={this.state.author}/>
                <Buttons text={this.state.text} author={this.state.author}
                    randomQuote={this.getRandomQuotes} btnBackground={this.state.btnBackground}/>
            </div>
        );
    }
}


ReactDOM.render(<QuoteBox />, document.getElementById('root'));