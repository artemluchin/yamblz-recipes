import Bookmark from './Bookmark'
import { connect } from 'react-redux'
import { addToSavedRecipes, removeFromSavedRecipes } from '../../../actions/historyActions'
import { navigatePush } from '../../../actions/navigationActions'

export default connect(
	state => ({
		recipeID: state.recipe._id,
		isFavourite: state.recipe.isFavourite
	}),
	dispatch => ({
		addToSavedRecipes: id => dispatch(addToSavedRecipes(id)),
		removeFromSavedRecipes: id => dispatch(removeFromSavedRecipes(id)),
		pushToHistory: () => dispatch(navigatePush({
			key: 'History',
			title: 'Ваши рецепты'
		}))
	})
)(Bookmark)
