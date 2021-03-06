import {
	SET_CURRRENT_RECIPE,
	SET_CURRENT_CATEGORY,
	OPEN_MODAL_BOOKMARK_SAVED,
	OPEN_MODAL_VOICE_HELP
} from '../constants/actionTypes'

const initialState = {
	currentRecipe: '', // id текущего рецепта
	currentCategory: '', // id текущей категории,
	isBookmarkModalOpen: false,
	isVoiceModalOpen: false
}
function general (state = initialState, action) {
	switch (action.type) {
		case SET_CURRRENT_RECIPE:
			return {
				...state,
				...{currentRecipe: action.payload}
			}
		case SET_CURRENT_CATEGORY:
			return {
				...state,
				...{currentCategory: action.payload}
			}
		case OPEN_MODAL_BOOKMARK_SAVED:
			return {
				...state,
				...{isBookmarkModalOpen: action.payload}
			}
		case OPEN_MODAL_VOICE_HELP:
			return {
				...state,
				...{isVoiceModalOpen: action.payload}
			}
		default: return state
	}
}

export default general
