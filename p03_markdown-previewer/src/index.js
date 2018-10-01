import React from 'react';
import ReactDOM from 'react-dom';

class Preview extends React.Component {
    render() {
        return(
            <textarea id='preview' style={{width: 400, height: 200}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum, vel similique quidem repudiandae autem iure? Ipsum, dolorum harum soluta sit illum voluptatum delectus exercitationem impedit odio, quasi a error accusantium dicta, voluptatibus ad aliquid voluptate deserunt recusandae dolores saepe!
            </textarea>
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
    render() {
        return (
            <textarea id='editor' style={{width: 400, height: 200}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium minus odio ratione pariatur illum sed tempora nulla dolor eius praesentium dolorem, provident sint minima qui sequi necessitatibus distinctio quo voluptas inventore? Distinctio et odit consectetur voluptate sequi architecto iure.
            </textarea>
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
        return(
            <div>
                <Markdown />
                <Preview />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));