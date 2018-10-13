export const SET_VOLUME = 'SET_VOLUME';
export const SELECT_BANK = 'SELECT_BANK';
export const DISPLAY_TEXT = 'DISPLAY_TEXT';

export const setVolume = volume => ({
    type: SET_VOLUME,
    volume
})

export const selectBank = index => ({
    type: SELECT_BANK,
    bankIndex: index
})

export const displayText = text => ({
    type: DISPLAY_TEXT,
    displayText: text
})