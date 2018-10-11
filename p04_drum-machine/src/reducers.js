import { combineReducers } from 'redux'
const SET_VOLUME = 'SET_VOLUME';
const SET_BANK = 'SET_BANK';

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