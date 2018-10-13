export const SET_VOLUME = 'SET_VOLUME';
export const SET_BANK = 'SET_BANK';
export const DISPLAY_TEXT = 'DISPLAY_TEXT';

export const bankList = [
    // bank 1
    {
        name: 'bank 1',
        samples: [
            {
                description: 'Heater-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            },
            {
                description: 'Heater-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            },
            {
                description: 'Heater-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            {
                description: 'Heater-4',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            },
            {
                description: 'Clap',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            },
            {
                description: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            },
            {
                description: 'Kick-n\'-Hat',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            },
            {
                description: 'Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            },
            {
                description: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            },
        ]
    },
    // bank 2
    {
        name: 'bank 2',
        samples: [
            {
                description: 'Chord-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
            },
            {
                description: 'Chord-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            },
            {
                description: 'Chord-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            },
            {
                description: 'Shaker',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            },
            {
                description: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            },
            {
                description: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            },
            {
                description: 'Punchy-Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            },
            {
                description: 'Side-Stick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            },
            {
                description: 'Snare',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            },
        ]
    },
    // bank 3
    {
        name: 'bank 3',
        samples: [
            {
                description: '808',
                url: '../audio/808agogo.aif.mp3'
            },
            {
                description: 'Badcow',
                url: '../audio/badcow.aif.mp3'
            },
            {
                description: 'Click',
                url: '../audio/bellclicker.aif.mp3'
            },
            {
                description: 'Clave',
                url: '../audio/clave.aif.mp3'
            },
            {
                description: 'Tom',
                url: '../audio/distortotom.aif.mp3'
            },
            {
                description: 'FingerSnap',
                url: '../audio/FingerSnap01.wav.mp3'
            },
            {
                description: 'HH',
                url: '../audio/hh4.aif.mp3'
            },
            {
                description: 'Zap',
                url: '../audio/noisezapper.aif.mp3'
            },
            {
                description: 'Ping',
                url: '../audio/pingtoohigh.aif.mp3'
            },
        ]
    }
];

export const setVolume = volume => ({
    type: SET_VOLUME,
    volume
})

export const setBankById = id => ({
    type: SET_BANK,
    bank: bankList[id]
})

export const displayText = text => ({
    type: DISPLAY_TEXT,
    displayText: text
})