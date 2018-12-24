import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// --- Components ---

class ButtonsContainer extends React.Component {
    render() {
        return (
            <div id='buttons-container'>
                <button id='start-stop' className='rect-button'>Start</button>
                <button id='reset' className='rect-button'>Reset</button>
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
                <div id='session-label'>Session Length</div>
                <button id='session-increment' className='round-button'>+</button>
                <span id='session-length'>05</span>
                <button id='session-decrement' className='round-button'>-</button>
            </div>
        )
    }
}

class BreakLengthContainer extends React.Component {
    render() {
        return (
            <div id='break-length-container'>
                <div id='break-label'>Break Length</div>
                <button id='break-increment' className='round-button'>+</button>
                <span id='break-length'>05</span>
                <button id='break-decrement' className='round-button'>-</button>
            </div>
        )
    }
}

class BreakAndSessionContainer extends React.Component {
    render() {
        return (
            <div id='break-and-session-container'>
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

