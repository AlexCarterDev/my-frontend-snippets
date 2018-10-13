import { connect } from 'react-redux'
import BankPad from '../components/BankPad'
import { selectBank } from '../actions'

const mapStateToProps = (state) => ({
    bankIndex: state.bankIndex
})

const mapDispatchToProps = (dispatch) => {
    return {
        selectBank: (index) => dispatch(selectBank(index))
    }
}

const BankPadContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BankPad);

export default BankPadContainer