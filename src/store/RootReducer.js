import { combineReducers } from 'redux'

import offersReducer from '../services/Offers/reducers'

export default combineReducers({
	offers: offersReducer
})