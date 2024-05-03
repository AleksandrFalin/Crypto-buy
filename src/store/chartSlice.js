import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cryptoService from '../API/cryptoService'

export const getChart = createAsyncThunk(
	'chart/getChart',
	async function (cryptocurrency) {
		const data = await cryptoService.getChart(cryptocurrency)
		return data.Data.Data
	}
)

const chartSlice = createSlice({
	name: 'chart',
	initialState: {
		chartData: [],
		status: null,
		error: null,
	},
	reducers: {
		addChart(state, action) {
			state.chartData.push(action.payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getChart.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(getChart.fulfilled, (state, { payload }) => {
				state.status = 'resolved'
				state.chartData = payload
			})
			.addCase(getChart.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error.message
			})
	},
})

export const { addLeader } = chartSlice.actions
export default chartSlice.reducer
