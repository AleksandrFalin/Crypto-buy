import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import categorySlice from './categorySlice'
import chartSlice from './chartSlice'
import leadersSlice from './leadersSlice'

export default configureStore({
	reducer: {
		leaders: leadersSlice,
		category: categorySlice,
		chart: chartSlice,
		auth: authSlice,
	},
})
