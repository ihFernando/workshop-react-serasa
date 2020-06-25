import { call, takeEvery } from 'redux-saga/effects'

import { OFFERS_REQUEST } from '../types'

import { getDebt } from '../../../api/offersApi'

function consoleLog(value) {
	console.log('consoleLog::::', value)
}

function* loadOffers() {
	const offers = yield call(getDebt)

	yield call(consoleLog, offers)
}

export default function*() {
	yield takeEvery(OFFERS_REQUEST, loadOffers)
}
