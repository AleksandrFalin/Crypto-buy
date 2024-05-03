import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../store/authSlice'

function Form() {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
		getValues,
		trigger,
	} = useForm({
		mode: 'onBlur',
	})
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const regex =
		// eslint-disable-next-line no-control-regex
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

	const onSubmit = () => {
		dispatch(loginUser())
		navigate('/')
		reset()
	}

	const password = getValues('password')

	useEffect(() => {
		if (getValues('password')) {
			trigger('repeatPassword')
			trigger('password')
		}
	}, [password])

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-2 xl:w-2/4 xl:mx-[auto]'
		>
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
					<p className=' text-red-500'>{errors?.email?.message || 'Error!'}</p>
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
				<p className=' text-red-500'>{errors?.password?.message || 'Error!'}</p>
			)}
			<label className='flex flex-col text-left gap-2'>
				CONFIRM PASSWORD
				<input
					className=' bg-transparent border rounded-xl py-1 px-2  border-gray-500/50 mb-2'
					type='password'
					{...register('repeatPassword', {
						required: 'The field must be filled in!',
						validate: {
							matchPassword: value =>
								value === getValues('password') ||
								'The passwords do not match!',
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
	)
}

export default Form
