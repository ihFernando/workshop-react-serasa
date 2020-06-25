import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as offersActions from '../../services/Offers/actions'

function OffersPage({ offers, loadOffers }) {
	const { loading } = offers

	useEffect(() => {
		loadOffers()
		console.log(offers)
	}, [loadOffers])

	return (
		<h2>Ofertas {loading && 'carregando...'}</h2>
	)
}

const MapStateToProps = state => ({
	offers: state.offers
})

const MapDispatchToProps = dispatch => 
	bindActionCreators(offersActions, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(OffersPage)