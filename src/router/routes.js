import Error from '../pages/Error'
import Exchange from '../pages/Exchange'
import Home from '../pages/Home'
import Market from '../pages/Market'
import SignUp from '../pages/SignUp'

export const publicRoutes = [
	{ path: 'home', element: Home },
	{ path: '/', element: Home },
	{ path: '*', element: Error },
	{ path: 'sign-up', element: SignUp },
	{ path: 'market', element: Market },
	{ path: 'exchange', element: Exchange },
]
