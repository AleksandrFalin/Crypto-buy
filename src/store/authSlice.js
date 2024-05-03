import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: false,
	},
	reducers: {
		logoutUser(state) {
			state.isAuth = false
		},
		loginUser(state) {
			state.isAuth = true
		},
	},
})

export const { loginUser, logoutUser } = authSlice.actions
export default authSlice.reducer
