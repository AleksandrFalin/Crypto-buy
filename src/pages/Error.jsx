import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<section className='w-80-m-auto overflow-hidden xl:w-1280-m-auto  xl:full-height-desc'>
			<div className='flex flex-col items-center text-center gap-4 pt-[50%] pb-[50%] xl:pb-[20%] xl:pt-[20%]'>
				<h2 className='text-8xl'>404</h2>
				<p className='xl:text-3xl'>Oops! That page can’t be found</p>
				<p className='xl:text-lg'>
					The page you are looking for it maybe deleted
				</p>
				<Link
					to='/home'
					className='border border-white  py-2 rounded-3xl hover:opacity-50 transition-all ease-in-out xl:w-1/3'
				>
					Go to home
				</Link>
			</div>
		</section>
	)
}

export default Error
