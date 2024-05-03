import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cryptoService from '../API/cryptoService'

export const getLeaders = createAsyncThunk(
	'leaders/getLeaders',
	async function () {
		const data = await cryptoService.getLeaders()
		return data
	}
)

const leadersSlice = createSlice({
	name: 'leaders',
	initialState: {
		leaders: [],
		status: null,
		error: null,
	},
	reducers: {
		addLeader(state, action) {
			state.leaders.push(action.payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getLeaders.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(getLeaders.fulfilled, (state, { payload }) => {
				state.status = 'resolved'
				state.leaders = payload
			})
			.addCase(getLeaders.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error.message
			})
	},
})

export const { addLeader } = leadersSlice.actions
export default leadersSlice.reducer
