export const SET_VOLUME = 'SET_VOLUME';
export const SELECT_BANK = 'SELECT_BANK';
export const SAMPLE_DESCRIPTION = 'SAMPLE_DESCRIPTION';

export const setVolume = volume => ({
    type: SET_VOLUME,
    volume
})

export const selectBank = index => ({
    type: SELECT_BANK,
    bankIndex: index
})

export const sampleDescription = description => ({
    type: SAMPLE_DESCRIPTION,
    description
})