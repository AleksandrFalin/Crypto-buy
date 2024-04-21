import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className='pt-4  mb-8'>
			<div className=' w-80-m-auto px-4 flex justify-between items-center '>
				<div>
					<h1 className=' text-xl'>CryptoFusion Nexus</h1>
				</div>
				<nav className='hidden'>
					<ul>
						<li>Главная</li>
						<li>Обмен</li>
						<li>Маркет</li>
						<li>Информация</li>
					</ul>
					<aside>
						<img src='' alt='' />
					</aside>
					<div>
						<Link>Login</Link>
						<Link>Sign up</Link>
					</div>
				</nav>
				<button className='burger'></button>
			</div>
		</header>
	)
}

export default Header
