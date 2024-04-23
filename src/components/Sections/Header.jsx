import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className='pt-4 xl:pt-0 xl:border-b xl:border-gray-600 mb-4'>
			<div className=' w-80-m-auto xl:w-1280-m-auto  px-4 xl:pt-4 xl:pb-6 flex justify-between xl:justify-start xl:gap-20 items-center '>
				<div className='xl:relative'>
					<h1 className=' text-xl xl:text-4xl  xl:before:border xl:before:border-gray-600 xl:before:absolute xl:before:-right-9 xl:before:top-6  xl:before:w-10 xl:before:rotate-90 '>
						CryptoFusion Nexus
					</h1>
				</div>
				<nav className='hidden xl:flex xl:pt-2 xl:gap-10'>
					<ul className=' xl:flex xl:items-center xl:gap-10  '>
						<li className='xl:text-2xl cursor-pointer opacity-50 xl:transition-all xl:ease-in-out xl:hover:opacity-100'>
							Home
						</li>
						<li className='xl:text-2xl cursor-pointer opacity-50 xl:transition-all xl:ease-in-out xl:hover:opacity-100'>
							Exchange
						</li>
						<li className='xl:text-2xl cursor-pointer opacity-50 xl:transition-all xl:ease-in-out xl:hover:opacity-100'>
							Market
						</li>
						<li className='xl:text-2xl cursor-pointer opacity-50 xl:transition-all xl:ease-in-out xl:hover:opacity-100'>
							Info
						</li>
					</ul>
					<aside>
						<img
							className='w-8 bg-blue-400 p-1 rounded-3xl'
							src='theme/night-mode.svg'
							alt='night-theme'
						/>
					</aside>
					<div>
						<Link className='xl:text-2xl xl:border xl:border-white xl:rounded-3xl xl:px-2 xl:py-1 xl:hover:opacity-45 xl:mr-4 xl:transition-all xl:ease-in-out'>
							Login
						</Link>
						<Link className='xl:text-2xl xl:border xl:border-white xl:rounded-3xl xl:px-2 xl:py-1 xl:hover:opacity-45 xl:transition-all xl:ease-in-out'>
							Sign up
						</Link>
					</div>
				</nav>
				<button className='burger xl:hidden'></button>
			</div>
		</header>
	)
}

export default Header
