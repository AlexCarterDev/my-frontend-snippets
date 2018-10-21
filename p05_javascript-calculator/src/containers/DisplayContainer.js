import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = (state) => ({
    str: state.main[state.main.length - 1]
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)
