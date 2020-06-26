import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as offersActions from '../../services/Offers/actions'

function OffersPage({ offers, loadOffers }) {
	const { loading, list: offersList } = offers

	useEffect(() => {
		loadOffers()
		console.log(offers)
	}, [loadOffers])

	return (
		<div>
			<h2>Ofertas {loading && 'carregando...'}</h2>
			{offersList.map(offer => <p key={offer.id}>{offer.company_name}</p>)}
		</div>
	)
}

const MapStateToProps = state => ({
	offers: state.offers
})

const MapDispatchToProps = dispatch => 
	bindActionCreators(offersActions, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(OffersPage)