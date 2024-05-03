import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../store/authSlice'
import HeaderLink from './HeaderLink/HeaderLink'

function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const { isAuth } = useSelector(state => state.auth)

	const data = [
		{ text: 'Home', path: 'home' },
		{ text: 'Exchange', path: 'exchange' },
		{ text: 'Market', path: 'market' },
		{ text: 'Info', path: 'info' },
	]

	function handleOpen() {
		if (!isOpen) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}

	function handleOut() {
		dispatch(logoutUser())
	}

	return (
		<header className='pt-4 xl:pt-0 xl:border-b xl:border-gray-600 mb-4'>
			<div className='relative w-80-m-auto xl:w-1280-m-auto  px-4 xl:pt-4 xl:pb-6 flex justify-between xl:justify-start xl:gap-20 items-center '>
				<div className='xl:relative'>
					<h1 className=' text-xl xl:text-4xl  xl:before:border xl:before:border-gray-600 xl:before:absolute xl:before:-right-9 xl:before:top-6  xl:before:w-10 xl:before:rotate-90 '>
						CryptoFusion Nexus
					</h1>
				</div>
				<nav
					className={`${
						isOpen ? 'absolute' : 'hidden'
					} bg-sky-950 rounded-lg py-4 top-10 z-20 w-[320px] text-center xl:bg-transparent xl:w-auto xl:py-0 xl:static xl:flex xl:pt-2 xl:gap-10 xl:items-center`}
				>
					<ul className='flex flex-col gap-4 mb-4 xl:m-0 xl:flex-row   xl:items-center xl:gap-10  '>
						{data.map(item => (
							<HeaderLink key={item.text} {...item} />
						))}
					</ul>
					<aside className=' absolute bottom-3 left-36 xl:sticky'>
						<img
							className='w-8 cursor-pointer bg-blue-400 p-1 rounded-3xl'
							src='theme/night-mode.svg'
							alt='night-theme'
						/>
					</aside>
					<div className=' flex justify-between px-4 xl:block xl:p-0 '>
						{isAuth ? (
							<div className='flex items-center gap-10 '>
								<Link>
									<img className='w-8 ' src='./user.svg' alt='user' />
								</Link>
								<p
									className='xl:text-2xl xl:border xl:border-white xl:rounded-3xl xl:px-2 xl:py-1 xl:hover:opacity-45 xl:mr-4 xl:transition-all xl:ease-in-out cursor-pointer'
									onClick={handleOut}
								>
									Exit
								</p>
							</div>
						) : (
							<>
								<Link className='xl:text-2xl xl:border xl:border-white xl:rounded-3xl xl:px-2 xl:py-1 xl:hover:opacity-45 xl:mr-4 xl:transition-all xl:ease-in-out'>
									Login
								</Link>
								<Link
									to='sign-up'
									className='xl:text-2xl xl:border xl:border-white xl:rounded-3xl xl:px-2 xl:py-1 xl:hover:opacity-45 xl:transition-all xl:ease-in-out'
								>
									Sign up
								</Link>
							</>
						)}
					</div>
				</nav>
				<button onClick={handleOpen} className='burger xl:hidden'></button>
			</div>
		</header>
	)
}

export default Header
