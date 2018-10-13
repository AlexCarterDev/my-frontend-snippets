import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = (state) => ({
    volume: state.volume,
    action: state.action,
    bankIndex: state.bankIndex,
    sampleDescription: state.sampleDescription
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Display)
