import { connect } from 'react-redux'
import BankPad from '../components/BankPad'
import { selectBank } from '../actions'

const mapStateToProps = (state) => {
    console.log('BankPadContainer: mapStateToProps')

    return {
        bankIndex: state.bankIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('BankPadContainer: mapDispatchToProps')
    return {
        selectBank: (index) => dispatch(selectBank(index))
    }
}

const BankPadContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BankPad);

export default BankPadContainer