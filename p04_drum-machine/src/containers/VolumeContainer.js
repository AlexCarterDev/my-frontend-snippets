import { connect } from 'react-redux'
import { setVolume } from '../actions'
import Volume from '../components/Volume'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return {
        volumeChanged: (volume) => {dispatch(setVolume(volume))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Volume)
