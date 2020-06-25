import { OFFERS_REQUEST } from '../types'

const initialState = {
	loading: true,
	offers: [],
}

function offersReducer(state = initialState, { type, paylaod }) {
	switch (type) {
		case OFFERS_REQUEST:
			return {
				...state,
			}
		default: 
			return state
	}
}

export default offersReducer

