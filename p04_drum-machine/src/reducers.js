import { combineReducers } from 'redux'
import { SET_VOLUME, SET_BANK, DISPLAY_TEXT, bankList } from './actions.js'

const initialBank = bankList[0];

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

const bank = (state = initialBank, action) => {
    switch(action.type) {
        case SET_BANK: {
            console.log('reducer bank: ' + action.bank);
            return action.bank;
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
    bank,
    display
})