import { combineReducers } from 'redux'
import { SET_VOLUME, SELECT_BANK, DISPLAY_TEXT } from './actions.js'

const volume = (state = 100, action) => {
    switch(action.type) {
        case SET_VOLUME: {
            return action.volume;
        }
        default: {
            return state;
        }
    }
}

const bankIndex = (state = 0, action) => {
    switch(action.type) {
        case SELECT_BANK: {
            console.log('reducer selectBank: ' + action.bankIndex);
            return action.bankIndex;
        }
        default: {
            return state;
        }
    }
}

const display = (state = 'init', action) => {
    switch(action.type) {
        case DISPLAY_TEXT: {
            return action.displayText;
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    volume, 
    bankIndex,
    display
})