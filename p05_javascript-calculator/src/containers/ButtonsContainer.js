import { connect } from 'react-redux'
import Buttons from '../components/Buttons'
import { clear, addDigit, addOperation } from '../actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    clear: () => dispatch(clear()),
    addDigit: (d) => dispatch(addDigit(d)),
    addOperation: (o) => dispatch(addOperation(o))
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
