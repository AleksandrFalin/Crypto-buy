import Error from '../pages/Error'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'

export const publicRoutes = [
	{ path: 'home', element: Home },
	{ path: '/', element: Home },
	{ path: '*', element: Error },
	{ path: 'sign-up', element: SignUp },
]
