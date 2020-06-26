import { call, put, takeEvery } from 'redux-saga/effects'

import { OFFERS_REQUEST } from '../types'

import { getDebt } from '../../../api/offersApi'

import { loadOffersSuccess } from '../actions'

function consoleLog(value) {
	console.log('consoleLog::::', value)
}

function* loadOffers() {
	const offers = yield call(getDebt)

	if (offers.length) {
		yield put(loadOffersSuccess(offers))
	}
}

export default function*() {
	yield takeEvery(OFFERS_REQUEST, loadOffers)
}
