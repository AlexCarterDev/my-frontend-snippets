import { connect } from 'react-redux'
import DrumPad from '../components/DrumPad'
import { displayText } from '../actions'

const mapStateToProps = state => {
    console.log('DrumPadSampleSelector: mapStateToProps')
    return {
        bank: state.bank,
    }
}

const mapDispatchToProps = dispatch => {
    console.log('DrumPadSampleSelector: mapDispatchToProps');
    return {
        playButtonClicked: (text) => {dispatch(displayText(text))}
    }
}

const DrumPadSampleSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(DrumPad);

export default DrumPadSampleSelector