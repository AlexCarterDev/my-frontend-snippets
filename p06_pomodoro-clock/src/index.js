import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

debugger;
// --- Components ---
var pomodoroClock;
var htmlAudio;

function pomodoroClockHandle(decrementTime) {
    return () => {
        decrementTime();
    }
}

class ButtonsContainer extends React.Component {
    render() {
        var startStopText;

        if (this.props.pomodoroState === POMODORO_STATE_PAUSE) {
            startStopText = 'Start';
        } else {
            startStopText = 'Stop';
        }

        const startStop = () => {
            if (this.props.pomodoroState === POMODORO_STATE_PAUSE) {
                console.log('setInterval')
                clearInterval(pomodoroClock);
                pomodoroClock = setInterval(pomodoroClockHandle(this.props.decrementTime), 1000);
                this.props.start();
            } else {
                console.log('clearInterval')
                clearInterval(pomodoroClock);
                this.props.stop();
            }
        }
        const resetHandle = () => {
            htmlAudio.pause();
            htmlAudio.currentTime = 0;

            clearInterval(pomodoroClock);
            this.props.reset();
        }
        return (
            <div id='buttons-container'>
                <button id='start_stop' className='rect-button' onClick={startStop}>{startStopText}</button>
                <button id='reset' className='rect-button' onClick={resetHandle}>Reset</button>
            </div>
        )
    }
}

class TimeContainer extends React.Component {
    componentDidMount() {
        htmlAudio = document.getElementById('beep');
    }

    render() {
        var seconds = ('0' + this.props.timeLeft.getSeconds()).slice(-2);
        var minutes = ('0' + this.props.timeLeft.getMinutes()).slice(-2);
        var title;

        if (this.props.pomodoroState === POMODORO_STATE_PAUSE) {
            title = this.props.pomodoroLastState === POMODORO_STATE_SESSION ? 'Session' : 'Break';
        } else {
            title = this.props.pomodoroState === POMODORO_STATE_SESSION ? 'Session' : 'Break';
        }

        if (this.props.isLastSecond) {
            htmlAudio.play();
        }
        return (
            <div id='time-container'>
                <div id='timer-label'>{title}</div>
                <div id='time-left'>{minutes + ':' + seconds}</div>
                <audio id='beep' src='crunch-chords.mp3'></audio>
            </div>
        )
    }
}

class SessionLengthContainer extends React.Component {
    render() {
        console.log('Render SessionLengthContainer, sessionLength=' + this.props.sessionLength);
        return (
            <div id='session-length-container'>
                <div id='session-label'>Session Length</div>
                <button id='session-increment' className='round-button' onClick={this.props.increment}>+</button>
                <span id='session-length'>{this.props.sessionLength}</span>
                <button id='session-decrement' className='round-button' onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}

class BreakLengthContainer extends React.Component {
    render() {
        console.log('Render BreakLengthContainer, breakLength=' + this.props.breakLength);
        return (
            <div id='break-length-container'>
                <div id='break-label'>Break Length</div>
                <button id='break-increment' className='round-button' onClick={this.props.increment}>+</button>
                <span id='break-length'>{this.props.breakLength}</span>
                <button id='break-decrement' className='round-button' onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}

class BreakAndSessionContainer extends React.Component {
    render() {
        return (
            <div id='break-and-session-container'>
                <BreakLengthIncDec />
                <SessionLengthIncDec />
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
                <TimeLeft />
                <ButtonsResetStartStop />
            </div>
        )
    }
}

// --- Containers ---
const SessionLengthIncDec = connect(
    (state) => ({
        sessionLength: state.sessionLength
    }),
    (dispatch) => ({
        increment: () => dispatch(incrementSession()),
        decrement: () => dispatch(decrementSession())
    })
)(SessionLengthContainer)
const BreakLengthIncDec = connect(
    (state) => ({
        breakLength: state.breakLength
    }),
    (dispatch) => ({
        increment: () => dispatch(incrementBreak()),
        decrement: () => dispatch(decrementBreak())
    })
)(BreakLengthContainer)
const ButtonsResetStartStop = connect(
    (state) => ({
        pomodoroState: state.pomodoroState 
    }),
    (dispatch) => ({
        start: () => dispatch(start()),
        stop: () => dispatch(stop()),
        reset: () => dispatch(reset()),
        decrementTime: () => dispatch(decrementTime()),
    })
)(ButtonsContainer)
const TimeLeft = connect(
    (state) => ({
        isLastSecond: state.isLastSecond,
        timeLeft: state.timeLeft,
        pomodoroState: state.pomodoroState,
        pomodoroLastState: state.pomodoroLastState
    })
)(TimeContainer)
// --- Actions ---
const INCREMENT_BREAK = 'inc_break';
const DECREMENT_BREAK = 'dec_break';
const INCREMENT_SESSION = 'inc_session';
const DECREMENT_SESSION = 'dec_session';
const RESET = 'reset';
const START= 'start';
const STOP = 'stop';
const DECREMENT_TIME = 'dec_time';

const incrementBreak = () => ({
    type: INCREMENT_BREAK
})
const decrementBreak = () => ({
    type: DECREMENT_BREAK
})
const incrementSession = () => ({
    type: INCREMENT_SESSION
})
const decrementSession = () => ({
    type: DECREMENT_SESSION
})
const reset = () => ({
    type: RESET
})
const start = () => ({
    type: START
})
const stop = () => ({
    type: STOP
})
const decrementTime = () => ({
    type: DECREMENT_TIME
})


// --- Reducers ---
const POMODORO_STATE_BREAK = 'break';
const POMODORO_STATE_SESSION = 'session';
const POMODORO_STATE_PAUSE = 'pause';

class Time {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.getSeconds = this.getSeconds.bind(this);
        this.getMinutes = this.getMinutes.bind(this);
        this.decrementSeconds = this.decrementSeconds.bind(this);
        this.isEnd = this.isEnd.bind(this);
        this.getClone = this.getClone.bind(this);
    }
    
    getSeconds() {
        return this.seconds
    }
    getMinutes() {
        return this.minutes
    }
    decrementSeconds() {
        if (this.seconds <= 0) {
            if (this.minutes > 0) {
                this.minutes--;
                this.seconds = 59;
            }
        } else {
            this.seconds--;
        }
    }
    isEnd() {
        return (this.seconds <= 0) && (this.minutes <= 0);
    }
    getClone() {
        return new Time(this.minutes, this.seconds);
    }
}

const initState = {
    breakLength: 5,
    sessionLength: 25,
    timeLeft: new Time(25, 0),
    pomodoroState: POMODORO_STATE_PAUSE,
    pomodoroLastState: POMODORO_STATE_SESSION,
    isLastSecond: false,
}

function isLengthCorrect(length) {
    return (length > 0) && (length <= 60)
}
function changeBreakLength(state, val) {
    var length = state.breakLength + val;
    if (isLengthCorrect(length)) {
        return {
            ...state,
            breakLength: length
        }
    } else {
        return state;
    }
}
function changeSessionLength(state, val) {
    var length = state.sessionLength + val;
    if (isLengthCorrect(length)) {
        return {
            ...state,
            timeLeft: new Time(length, 0),
            sessionLength: length
        }
    } else {
        return state;
    }
}

const pomodoroReducer = (state = initState, action) => {
    console.log('Action:', action);
    switch (action.type) {
        case INCREMENT_BREAK: {
            return changeBreakLength(state, +1);
        }
        case DECREMENT_BREAK: {
            return changeBreakLength(state, -1);
        }
        case INCREMENT_SESSION: {
            return changeSessionLength(state, +1);
        }
        case DECREMENT_SESSION: {
            return changeSessionLength(state, -1);
        }
        case START: {
            if (state.pomodoroState === POMODORO_STATE_PAUSE) {
                return {
                    ...state,
                    pomodoroState: state.pomodoroLastState,
                    pomodoroLastState: POMODORO_STATE_PAUSE,
                };
            } else {
                return state;
            }
        }
        case STOP: {
            if (state.pomodoroState !== POMODORO_STATE_PAUSE) {
                return {
                    ...state,
                    pomodoroState: POMODORO_STATE_PAUSE,
                    pomodoroLastState: state.pomodoroState,
                }
            } else {
                return state
            }
        }
        case DECREMENT_TIME: {
            var partState;

            if (state.timeLeft.isEnd()) {
                console.log(state);
                if (state.pomodoroState === POMODORO_STATE_BREAK) {
                    partState = {
                        isLastSecond: false,
                        pomodoroState: POMODORO_STATE_SESSION,
                        pomodoroLastState: state.pomodoroState,
                        timeLeft: new Time(state.sessionLength, 0)
                    }
                } else if (state.pomodoroState === POMODORO_STATE_SESSION) {
                    partState = {
                        isLastSecond: false,
                        pomodoroState: POMODORO_STATE_BREAK,
                        pomodoroLastState: state.pomodoroState,
                        timeLeft: new Time(state.breakLength, 0)
                    }
                } else {
                    return state
                }
            } else {
                var time = state.timeLeft.getClone();
                time.decrementSeconds();
                if (time.isEnd()) {
                    partState = {
                        isLastSecond: true,
                        timeLeft: time
                    }    
                } else {
                    partState = {
                        isLastSecond: false,
                        isEnd: false,
                        timeLeft: time
                    }
                }
            }

            return { ...state, ...partState };
        }
        case RESET: {
            return initState;
        }
        default: {
            return state;
        }
    }
}


const store = createStore(pomodoroReducer);

ReactDOM.render(
    <Provider store={store}>
        <PomodoroApp />
    </Provider>
    , document.getElementById('root')
);

