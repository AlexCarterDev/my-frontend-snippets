import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary">
                    Primary bootstrap button
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));