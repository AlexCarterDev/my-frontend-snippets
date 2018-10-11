import { combineReducers } from 'redux'
import { SET_VOLUME, SET_BANK } from './actions.js'

const initialBank = {
    name: 'init',
    samples: []
}

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
            var bank = {};
            bank.name = action.name;
            bank.samples = action.samples;
            return bank;
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    volume, 
    bank
})