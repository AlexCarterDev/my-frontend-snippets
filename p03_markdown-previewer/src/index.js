import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import marked from 'marked';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.renderer = new marked.Renderer();

        // Override html rendering link
        this.renderer.link = function(href, title, text) {
            return `
                <a href='${href}' target=_blank>${text}</a>
            `;
        }
    }

    render() {
        console.log('Preview: render');
        var html = marked(this.props.markdownText, {renderer: this.renderer, breaks: true});
        
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

const defualtMarkdown = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markdown: '',
        };

        this.loadDefaultMarkdown = this.loadDefaultMarkdown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateText = this.updateText.bind(this);
        this.loadDefaultMarkdownForCodepen = this.loadDefaultMarkdownForCodepen.bind(this);
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

    loadDefaultMarkdownForCodepen() {
        this.updateText(defualtMarkdown);
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