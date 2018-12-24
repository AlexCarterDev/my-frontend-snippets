import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
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
const INCREMENT_BREAK = 'inc_break';
const DECREMENT_BREAK = 'dec_break';
const INCREMENT_SESSION = 'inc_session';
const DECREMENT_SESSION = 'dec_session';
const RESET = 'reset';
const START= 'start';
const STOP = 'stop';
const DECREMENT_TIME = 'dec_time';

// --- Reducers ---
const POMODORO_STATE_BREAK = 'break';
const POMODORO_STATE_SESSION = 'session';
const POMODORO_STATE_PAUSE = 'pause';

const initState = {
    breakLength: 5,
    sessionLength: 25,
    timeLeft: 2500,
    pomodoroState: POMODORO_STATE_PAUSE,
    pomodoroLastState: POMODORO_STATE_SESSION
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
            sessionLength: length
        }
    } else {
        return state;
    }
}

const pomodoroReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT_BREAK: {
            return changeBreakLength(+1);
        }
        case DECREMENT_BREAK: {
            return changeBreakLength(-1);
        }
        case INCREMENT_SESSION: {
            return changeSessionLength(+1);
        }
        case DECREMENT_SESSION: {
            return changeSessionLength(-1);
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
                    pomodoroState: POMODORO_STATE_PAUSE,
                    pomodoroLastState: state.pomodoroState,
                }
            } else {
                return state
            }
        }
        case DECREMENT_TIME: {
            var partState;
            if (state.timeLeft === 0) {
                if (state.pomodoroState === POMODORO_STATE_BREAK) {
                    partState = {
                        pomodoroState: POMODORO_STATE_SESSION,
                        pomodoroLastState: state.pomodoroState,
                        timeLeft: state.sessionLength
                    }
                } else if (state.pomodoroState === POMODORO_STATE_SESSION) {
                    partState = {
                        pomodoroState: POMODORO_STATE_BREAK,
                        pomodoroLastState: state.pomodoroState,
                        timeLeft: state.breakLength
                    }
                } else {
                    return state
                }
            } else {
                partState = {
                    timeLeft: state.timeLeft - 1
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