import { OFFERS_REQUEST, OFFERS_REQUEST_SUCCESS } from '../types'

const initialState = {
	loading: true,
	list: [],
}

function offersReducer(state = initialState, { type, payload }) {
	switch (type) {
		case OFFERS_REQUEST:
			return {
				...state,
			}
		case OFFERS_REQUEST_SUCCESS:
			return {
				...state,
				list: [...payload]
			}
		default: 
			return state
	}
}

export default offersReducer

