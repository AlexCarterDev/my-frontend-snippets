import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// --- Components ---

class ButtonsContainer extends React.Component {
    render() {
        return (
            <div id='buttons-conatiner'>
                <button id='start-stop'>Start</button>
                <button id='reset'>Reset</button>
            </div>
        )
    }
}

class TimeContainer extends React.Component {
    render() {
        return (
            <div id='time-container'>
                <div id='timer-label'>Session</div>
                <div id='time-left'>23:04</div>
            </div>
        )
    }
}

class SessionLengthContainer extends React.Component {
    render() {
        return (
            <div id='session-length-container'>
                <div id='session-label'>Break Length</div>
                <button id='session-increment'>+</button>
                <span id='session-length'>05</span>
                <button id='session-decrement'>-</button>
            </div>
        )
    }
}

class BreakLengthContainer extends React.Component {
    render() {
        return (
            <div id='break-length-container'>
                <div id='break-label'>Break Length</div>
                <button id='break-increment'>+</button>
                <span id='break-length'>05</span>
                <button id='break-decrement'>-</button>
            </div>
        )
    }
}

class BreakAndSessionContainer extends React.Component {
    render() {
        return (
            <div>
                <BreakLengthContainer />
                <SessionLengthContainer />
            </div>
        )
    }
}

class TitleContainer extends React.Component {
    render() {
        return (
            <div id='title-container'>
                <h1>Pomodoro Clock</h1>
            </div>
        )
    }
}

class PomodoroApp extends React.Component {
    render() {
        return (
            <div id='pomodoro'>
                <TitleContainer/>
                <BreakAndSessionContainer />
                <TimeContainer />
                <ButtonsContainer />
            </div>
        )
    }
}

ReactDOM.render(<PomodoroApp />, document.getElementById('root'));

