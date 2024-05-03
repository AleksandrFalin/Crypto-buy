import axios from 'axios'

const headers = {
	accept: 'application/json',
}
export default class cryptoService {
	static async getLeaders() {
		return await axios
			.get('https://api.coincap.io/v2/assets', {
				headers,
			})
			.then(res => res.data)
	}
	static async getCategory(ids, limit) {
		return await axios
			.get('https://api.coincap.io/v2/assets', {
				params: {
					ids,
					limit,
				},
				headers,
			})
			.then(res => res.data)
	}

	static async getChart(cryptocurrency) {
		return await axios
			.get(
				`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${cryptocurrency}`,
				{
					params: { limit: 7, tsym: 'USD' },
					headers,
				}
			)
			.then(res => res.data)
	}
}
