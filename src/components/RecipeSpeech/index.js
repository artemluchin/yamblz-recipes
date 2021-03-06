import RecipeSpeech from './RecipeSpeech'
import { connect } from 'react-redux'
import {
	nextSlide,
	previousSlide,
	resetSlider,
	goToStart,
	goTo
} from '../../actions/recipeSwiperActions'
import { showVoiceModal } from '../../actions/generalActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentSlide: state.recipeSwiper.currentSlide,
	scroll: state.recipeSwiper.scroll
})

const dipsatchToProps = dispatch => (bindActionCreators({
	nextSlide,
	previousSlide,
	resetSlider,
	goToStart,
	goTo,
	showVoiceModal
}, dispatch))
export default connect(stateToProps, dipsatchToProps)(RecipeSpeech)
