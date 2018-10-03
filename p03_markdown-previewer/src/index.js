import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import marked from 'marked';


class Preview extends React.Component {


    render() {
        console.log('Preview: render');
        var html = marked(this.props.markdownText);
        
        return(
            <div>
                <div id='preview-title'>Preview</div>
                <div id='preview' dangerouslySetInnerHTML={{__html: html}}>
                </div>
            </div>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <div id='title'>
                Markdown
            </div>
        )
    }
}

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markdown: '',
        };

        this.loadDefaultMarkdown = this.loadDefaultMarkdown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    updateText(text) {
        this.setState({
            markdown: text
        });
        this.props.updatePreview(text);
    }

    handleChange(event) {
        this.updateText(event.target.value);
    }

    loadDefaultMarkdown() {
        console.log('Editr: start loading default text');
        const fileUrl = 'markdown-by-default';
        fetch(fileUrl)
            .then((r) => r.text())
            .then((text) => {
                console.log('Editor: default text loaded');
                this.updateText(text);
            })
            .catch((e) => console.log(e));
    }

    componentDidMount() {
        console.log('Editor: did mount');
        this.loadDefaultMarkdown();
    }

    render() {
        console.log('Editor: render');
        return (
            <textarea
                id='editor'
                value={this.state.markdown}
                onChange={this.handleChange}
            />
        )
    }
}

class Markdown extends React.Component {
    render() {
        return (
            <div id='markdown'>
                <Title />
                <Editor updatePreview={this.props.updatePreview}/>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownText: ''
        };
        this.updatePreview = this.updatePreview.bind(this);
    }

    updatePreview(text) {
        console.log('App: updatePreview');
        this.setState({
            markdownText: text
        });
    }

    render() {
        console.log('App: render')
        return(
            <div>
                <Markdown updatePreview={this.updatePreview}/>
                <Preview  markdownText={this.state.markdownText}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));