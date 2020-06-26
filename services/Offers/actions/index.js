import {
	OFFERS_REQUEST, OFFERS_REQUEST_SUCCESS,
} from '../types'

export const loadOffers = () => ({
	type: OFFERS_REQUEST,
})

export const loadOffersSuccess = payload => ({
	type: OFFERS_REQUEST_SUCCESS,
	payload
})