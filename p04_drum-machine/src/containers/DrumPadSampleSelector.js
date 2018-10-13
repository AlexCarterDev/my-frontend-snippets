import { connect } from 'react-redux'
import DrumPad from '../components/DrumPad'
import { sampleDescription } from '../actions'


const mapStateToProps = state => {
    console.log('DrumPadSampleSelector: mapStateToProps')
    return {
        bankIndex: state.bankIndex,
    }
}

const mapDispatchToProps = dispatch => {
    console.log('DrumPadSampleSelector: mapDispatchToProps');
    return {
        playButtonClicked: (text) => {dispatch(sampleDescription(text))}
    }
}

const DrumPadSampleSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(DrumPad);

export default DrumPadSampleSelector