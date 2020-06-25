import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Offers from './pages/Offers'

function Routes() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Login} />
			<Route path="/ofertas" component={Offers} />
		</BrowserRouter>
	)
}

export default Routes