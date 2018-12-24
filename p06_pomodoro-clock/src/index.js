import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'

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

// --- Actions ---
const SET_BREAK_LENGTH = 'set_break_length';
const SET_SESSION_LENGTH = 'set_session_length';
const SET_TIME_LEFT = 'set_time_left';
const RESET = 'reset';
const START_STOP = 'START_STOP';
const SWITCH_POMODORO_STATE = 'set_break_state';



// --- Reducers ---
const POMODORO_STATE_BREAK = 'break';
const POMODORO_STATE_SESSION = 'session';
const POMODORO_STATE_PAUSE = 'pause';

const initState = {
    breakLength: 5,
    sessionLength: 25,
    timeLeft: 25.0,
    pomodoroState: POMODORO_STATE_PAUSE,
    pomodoroLastState: POMODORO_STATE_SESSION
}

const pomodoroReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_BREAK_LENGTH: {
            if ((action.breakLength > 0) && (action.breakLength <= 60)) {
                return Object.assign({}, ...state, { breakLength: action.breakLength });
            } else {
                return state;
            }
        }
        case SET_SESSION_LENGTH: {
            if ((action.sessionLength > 0) && (action.sessionLength <= 60)) {
                return Object.assign({}, ...state, { sessionLength: action.sessionLength });
            } else {
                return state;
            }
        }
        case SWITCH_POMODORO_STATE: {
            if (state.pomodoroState === POMODORO_STATE_SESSION) {
                return Object.assign({}, ...state, {
                    pomodoroState: POMODORO_STATE_BREAK,
                    pomodoroLastState: state.pomodoroState
                });
            } else if (state.pomodoroState === POMODORO_STATE_BREAK) {
                return Object.assign({}, ...state, {
                    pomodoroState: POMODORO_STATE_SESSION,
                    pomodoroLastState: state.pomodoroState
                });
            } else {
                return state;
            }
        }
        case SET_TIME_LEFT: {
            return Object.assign({}, ...state, { timeLeft: action.timeLeft });
        }
        case START_STOP: {
            var pState;
            var pLastState;
            if (state.pomodoroState === POMODORO_STATE_PAUSE) {
                pState = state.pomodoroLastState;
                pLastState = POMODORO_STATE_PAUSE;
            } else {
                pState = POMODORO_STATE_PAUSE;
                pLastState = state.pomodoroState;
            }

            return Object.assign({}, ...state, {
                pomodoroState: pState,
                pomodoroLastState: pLastState
            });
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

