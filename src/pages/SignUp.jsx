import { Link } from 'react-router-dom'
import Form from '../components/Sections/Form/Form'

function SignUp() {
	return (
		<section className='w-80-m-auto xl:w-1280-m-auto full-height-mobile text-center pb-10  '>
			<h1 className='text-4xl mb-8 pt-4 xl:text-7xl'>Sign up</h1>
			<div className='flex items-center justify-center gap-2 mb-4 '>
				<p className='xl:text-lg'>Already have an account?</p>
				<Link to='login' className=' text-blue-400 hover:opacity-50'>
					Login
				</Link>
			</div>
			<p className='opacity-50 mb-3'>Use Your OpenID to Sign up</p>
			<div className='flex justify-center gap-8 pb-6 mb-6 border-b border-gray-500/50 xl:w-2/4 xl:mx-[auto]'>
				<button className='w-20 py-2 hover:opacity-50 transition-all ease-in-out bg-blue-500 rounded-3xl'>
					Google
				</button>
				<button className='w-20 py-2 hover:opacity-50 transition-all ease-in-out bg-gray-600/40 rounded-3xl'>
					Apple
				</button>
			</div>
			<i className='text-xs opacity-50 mb-6 block xl:text-sm'>
				Or continue width email
			</i>
			<Form />
		</section>
	)
}

export default SignUp
