import React from 'react'
import { Link } from 'react-router-dom'


function LoginPage() {
	return (
		<div>
			<h2>Login</h2>

			<a href="/ofertas">
				Ir para ofertas -> A
			</a>

			<br />

			<Link to="/ofertas">
				Ir para ofertas -> Link
			</Link>
		</div>
	)
}

export default LoginPage