import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Input({ handleInputName }) {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = event => {
		const value = event.target.value

		setInputValue(value)
	}

	useEffect(() => {
		handleInputName(inputValue)
	}, [inputValue, handleInputName])

  return (
		<div>
			<input
				type="text"
				placeholder="Nome..."
				onChange={(event) => handleInputChange(event)}
			/>
		</div>
  )
}

Input.propTypes = {
	handleInputName: PropTypes.func.isRequired,
}

export default Input