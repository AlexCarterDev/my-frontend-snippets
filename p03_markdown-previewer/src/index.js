import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';



class Preview extends React.Component {
    render() {
        
        return(
            <textarea 
                id='preview'
                readOnly={true}
                defaultValue={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, doloremque. Cum commodi unde ad culpa nihil quae. Ab alias iusto cum labore harum, corrupti odit voluptatum in maiores et. Asperiores qui odit explicabo consequatur repellendus unde pariatur in reiciendis commodi?'}
            />
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
    }

    handleChange(event) {
        this.setState({
            markdown: event.target.value
        });
    }

    loadDefaultMarkdown() {
        console.log('Editr: start loading default text');
        const fileUrl = 'markdown-by-default';
        fetch(fileUrl)
            .then((r) => r.text())
            .then((text) => {
                console.log('Editor: default text loaded');
                this.setState({markdown: text,});
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
                <Editor />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        console.log('App: render')
        return(
            <div>
                <Markdown />
                <Preview />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));