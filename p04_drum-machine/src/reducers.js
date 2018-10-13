import { combineReducers } from 'redux'
import { SET_VOLUME, SELECT_BANK, SAMPLE_DESCRIPTION } from './actions.js'

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
            return action.bankIndex;
        }
        default: {
            return state;
        }
    }
}

const sampleDescription = (state = 'init', action) => {
    switch(action.type) {
        case SAMPLE_DESCRIPTION: {
            return action.description;
        }
        default: {
            return state;
        }
    }
}

const action = (state = 'init', action) => {
    switch(action.type) {
        case SAMPLE_DESCRIPTION: {
            return 'sampleDescription'
        }
        case SELECT_BANK: {
            return 'bankIndex'
        }
        case SET_VOLUME: {
            return 'volume'
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    volume, 
    bankIndex,
    sampleDescription,
    action,
})