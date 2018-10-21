import { connect } from 'react-redux'
import Formula from '../components/Formula'

const mapStateToProps = (state) => ({
    str: state.main.join('')
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Formula)
