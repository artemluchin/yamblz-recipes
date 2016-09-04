import Timer from './Timer'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { navigatePush } from '../../actions/navigationActions'
export default connect(
	state => ({

	}),
	dispatch => ({
		goToTimers: () =>
			dispatch(navigatePush({key: 'Timers', title: 'Таймеры'}))
	})
)(Timer)
