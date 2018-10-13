import React from 'react';
import Title from './Title';
import Panel from './Panel';
import DrumPadSampleSelector from '../containers/DrumPadSampleSelector'

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

export default App