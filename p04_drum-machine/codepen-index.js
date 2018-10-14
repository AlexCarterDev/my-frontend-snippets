const { combineReducers, createStore } = Redux;
const { Provider, connect } = ReactRedux;

// ----- actions.js -----
const SET_VOLUME = 'SET_VOLUME';
const SELECT_BANK = 'SELECT_BANK';
const SAMPLE_DESCRIPTION = 'SET_DESCRIPTION';

const setVolume = volume => ({
    type: SET_VOLUME,
    volume,
    action: 'volume'
})

const selectBank = index => ({
    type: SELECT_BANK,
    bankIndex: index,
    action: 'bankIndex'
})

const setDescription = description => ({
    type: SAMPLE_DESCRIPTION,
    description,
    action: 'bankDescription'
})

// ----- bank.js -----
const github = 'https://raw.githubusercontent.com/AlexCarterDev/my-frontend-spippets/master/p04_drum-machine/public/audio/';
const bankList = [
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
                url: github + '808agogo.aif.mp3'
            },
            {
                description: 'Badcow',
                url: github + 'badcow.aif.mp3'
            },
            {
                description: 'Click',
                url: github + 'bellclicker.aif.mp3'
            },
            {
                description: 'Clave',
                url: github + 'clave.aif.mp3'
            },
            {
                description: 'Tom',
                url: github + 'distortotom.aif.mp3'
            },
            {
                description: 'FingerSnap',
                url: github + 'FingerSnap01.wav.mp3'
            },
            {
                description: 'HH',
                url: github + 'hh4.aif.mp3'
            },
            {
                description: 'Zap',
                url: github + 'noisezapper.aif.mp3'
            },
            {
                description: 'Ping',
                url: github + 'pingtoohigh.aif.mp3'
            },
        ]
    }
];

function getBankByIndex(i) {
    return bankList[i];
}


// ----- reducers.js -----
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
            return 'setDescription'
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

const rootReducer = combineReducers({
    volume, 
    bankIndex,
    sampleDescription,
    action,
})

// ----- Components and containers -----
class Volume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vol: 100
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.volumeChanged(e.target.value);
        this.setState({
            vol: e.target.value
        })
    }

    render() {
        return (
            <div id='slider-container'>
                <input type="range" min="0" max="100" className="slider" value={this.state.vol} onChange={this.handleChange}/>
            </div>
        )
    }
}

const VolumeContainer = connect(
    (state) => ({}), 
    (dispatch) => ({
        volumeChanged: (volume) => {dispatch(setVolume(volume))}
    })
)(Volume)

const SelectBankButton = ({id, text, onClick, checked}) => {
    console.log('SelectBankButton ' + id + ': render');
    var className = checked ? 
        'button-blue button-blue-active' : 
        'bank-pad-button-not-selected';

    return(
        <button 
            className={className}
            id={id}
            onClick={() => onClick(id)}
        >
            {text}
        </button>
    )
}

class BankPad extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(id) {
        var n = parseInt(id.substring(id.length - 1), 10);
        this.props.selectBank(n);
    }

    render() {
        console.log('BankPad: render');
        const buttons = [];
        const texts = ['bank 1', 'bank 2', 'bank 3'];

        for (let i = 0; i < texts.length; i++) {
            buttons.push(
                <SelectBankButton 
                    text={texts[i]}
                    key={i}
                    id={'bank-pad-' + i}
                    onClick={this.clickHandler}
                    checked={i === this.props.bankIndex} />
            );
        }

        return (
            <div>
                {buttons}
            </div>
        )
    }
}

const BankPadContainer = connect(
    (state) => ({
        bankIndex: state.bankIndex
    }),
    (dispatch) => ({
        selectBank: (index) => dispatch(selectBank(index))
    })
)(BankPad);

const Display = ({action, bankIndex, sampleDescription, volume}) => {
    var text;

    console.log(action);
    switch (action) {
        case 'volume': {
            text = 'vol: ' + volume;
            break;
        }
        case 'bankIndex': {
            text = 'selB: ' + (bankIndex + 1);
            break;
        }
        case 'setDescription': {
            text = sampleDescription;
            break;
        }
        default: {
            text = 'Hello'
        }
    }

    return (
        <div id='display-container'>
        <span id='display'>{text}</span>
        </div>
    )
}

const DisplayContainer = connect(
    (state) => ({
        volume: state.volume,
        action: state.action,
        bankIndex: state.bankIndex,
        sampleDescription: state.sampleDescription
    })
)(Display)

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.simulatePressButton = this.simulatePressButton.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }


    play() {
        console.log('PlayButton ' + this.props.description + ': play');
        this.audio.currentTime = 0;
        this.audio.play();
        this.audio.volume = this.props.volume/100;
        this.props.onClick();
    }

    simulatePressButton() {
        this.button.classList.add('button-green-active');
        setTimeout(() => {
            this.button.classList.remove('button-green-active');
        }, 100);
    }

    handleKeydown(e) {
        if (e.keyCode === this.props.keyCode) {
            console.log('keydown ' + e.keyCode);
            this.simulatePressButton();
            this.play(e);
        }
    }

    componentDidMount() {
        this.audio = document.getElementById(this.props.text);
        this.button = document.getElementById(this.props.description);
        document.addEventListener('keydown', this.handleKeydown);
        
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        console.log('PlayButton ' + this.props.description + ': render');

        return (

            <button 
                id={this.props.description}
                className={'drum-pad button-green'}
                onClick={this.play}
            >
                <audio className='clip' id={this.props.text} src={this.props.src} ></audio>
                {this.props.text}
            </button>
        )
    }
}

const DrumPad = ({bankIndex, playButtonClicked, volume}) => {
    console.log('DrumPad: render');
    const texts = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    var bank = getBankByIndex(bankIndex);
    const keyCodes = [];
    for (let i = 0; i < texts.length; i++) {
        keyCodes.push(texts[i].charCodeAt(0));
    }

    let buttons = [];
    for (let i = 0; i < texts.length; i++) {
        
        buttons.push(
            <PlayButton 
                key={i}
                volume={volume}
                text={texts[i]}
                id={'drum-pad-' + i}
                src={bank.samples[i].url}
                keyCode={keyCodes[i]}
                description={bank.samples[i].description}
                onClick={() => playButtonClicked(bank.samples[i].description)}
            />
        );
    }

    return(
        <div id='drum-pad'>
            {buttons}
        </div>
    )
}

const DrumPadSampleSelector = connect(
    (state) => ({
        bankIndex: state.bankIndex,
        volume: state.volume
    }),
    (dispatch) => ({
        playButtonClicked: (text) => {dispatch(setDescription(text))}
    })
)(DrumPad);


const Panel = () => {
    return (
        <div id='panel'>
            <DisplayContainer />
            <BankPadContainer />
            <VolumeContainer />
        </div>
    )
}

const Title = ({title}) => {
    return (
        <div id='title-container'>
            <h2>{title}</h2>
        </div>
    )
}

const App = () => {
    console.log('App: render');
    return(
        <div id='drum-machine'>
            <Title title='Drum machine' />
            <Panel />
            <DrumPadSampleSelector />
        </div>
    )
}

const store = createStore(rootReducer);
console.log('Store');
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
