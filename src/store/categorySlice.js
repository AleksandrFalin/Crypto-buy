import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cryptoService from '../API/cryptoService'

export const getCategory = createAsyncThunk(
	'category/getCategory',
	async function ({ ids, limit }) {
		const data = await cryptoService.getCategory(ids, limit)
		return data
	}
)

const categorySlice = createSlice({
	name: 'category',
	initialState: {
		currentItems: [],
		ids: null,
		limit: 4,
		status: null,
		error: null,
	},
	reducers: {
		setCurrentCategory(state, { payload }) {
			state.ids = payload
			state.limit = 4
		},
		loadMore(state) {
			state.limit += 4
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getCategory.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(getCategory.fulfilled, (state, { payload }) => {
				state.status = 'resolved'
				state.currentItems = payload
			})
			.addCase(getCategory.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error.message
			})
	},
})

export const { loadMore, setCurrentCategory } = categorySlice.actions
export default categorySlice.reducer
