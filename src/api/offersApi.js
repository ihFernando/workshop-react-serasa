import request from '../config/api'

export const getDebt = async () => {
	const response = await request.get('/debt')

	return response.data
}