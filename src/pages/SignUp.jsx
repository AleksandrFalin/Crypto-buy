import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// ДОДЕЛАТЬ ПРОВЕРКУ СХОДСТВА ПАРОЛЕЙ!
function SignUp() {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	})

	const regex =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

	const onSubmit = data => {
		alert(JSON.stringify(data))
		reset()
	}

	return (
		<section className='w-80-m-auto full-height-mobile text-center pb-10'>
			<h1 className='text-4xl mb-8 pt-4'>Sign up</h1>
			<div className='flex justify-center gap-2 mb-4'>
				<p>Already have an account?</p>
				<Link to='login' className=' text-blue-400'>
					Login
				</Link>
			</div>
			<p className='opacity-50 mb-3'>Use Your OpenID to Sign up</p>
			<div className='flex justify-center gap-8 pb-6 mb-6 border-b border-gray-500/50'>
				<button className='w-20 py-2 hover:opacity-50 transition-all ease-in-out bg-blue-500 rounded-3xl'>
					Google
				</button>
				<button className='w-20 py-2 hover:opacity-50 transition-all ease-in-out bg-gray-600/40 rounded-3xl'>
					Apple
				</button>
			</div>
			<i className='text-xs opacity-50 mb-6 block'>Or continue width email</i>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 '>
				<label className='flex flex-col text-left gap-2'>
					EMAIL
					<input
						className=' bg-transparent border rounded-xl py-1 px-2 border-gray-500/50'
						type='email'
						{...register('email', {
							required: 'The field must be filled in!',
							pattern: {
								value: regex,
								message: 'Enter the correct email',
							},
						})}
					/>
				</label>
				<div>
					{errors?.email && (
						<p className=' text-red-500'>
							{errors?.email?.message || 'Error!'}
						</p>
					)}
				</div>
				<label className='flex flex-col text-left gap-2'>
					PASSWORD
					<input
						className=' bg-transparent border rounded-xl py-1 px-2  border-gray-500/50'
						type='password'
						{...register('password', {
							required: 'The field must be filled in!',
							minLength: {
								value: 6,
								message: 'Short password',
							},
						})}
					/>
				</label>
				{errors?.password && (
					<p className=' text-red-500'>
						{errors?.password?.message || 'Error!'}
					</p>
				)}
				<label className='flex flex-col text-left gap-2'>
					CONFIRM PASSWORD
					<input
						className=' bg-transparent border rounded-xl py-1 px-2  border-gray-500/50'
						type='password'
						{...register('repeatPassword', {
							required: 'The field must be filled in!',
							minLength: {
								value: 6,
								message: 'Short password',
							},
						})}
					/>
				</label>
				{errors?.repeatPassword && (
					<p className=' text-red-500'>
						{errors?.repeatPassword?.message || 'Error!'}
					</p>
				)}
				<button
					className='hover:opacity-50 transition-all ease-in-out  py-2 bg-blue-500 rounded-3xl disabled:opacity-40'
					disabled={!isValid}
				>
					Submit
				</button>
			</form>
		</section>
	)
}

export default SignUp
