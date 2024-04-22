function Footer() {
	return (
		<footer>
			<div className='w-80-m-auto pb-4'>
				<h2 className='text-2xl text-center border py-1 rounded-3xl mb-8'>
					CryptoFusion Nexus
				</h2>
				<nav className='flex justify-between items-center mb-4'>
					<h3 className='uppercase'>Footer nav</h3>
					<button className=' rotate-90'>&#10148;</button>
					<ul className='text-center hidden'>
						<li>About</li>
						<li>Policy</li>
						<li>FAQ</li>
					</ul>
				</nav>
				<section className='relative before:absolute before:border-t  before:border-gray-500 before:w-full after:absolute after:border-t  after:border-gray-500 after:w-full'>
					<div className='py-3'>
						<h3 className='mb-4 uppercase'>Contact</h3>
						<p className=' w-2/3'>
							43252 Borer Mountains Zackerychester Bahamas
						</p>
						<p>732-528-4945</p>
					</div>
				</section>
				<section className='pt-4 mb-4 relative after:absolute after:border-t  after:border-gray-500 after:w-full'>
					<h3 className='mb-4 uppercase'>NEWSLETTER</h3>
					<p className='mb-4'>
						Subscribe to our newsletter to receive more information
					</p>
					<div className='flex items-center relative'>
						<input
							className=' bg-transparent border border-gray-500 rounded-3xl indent-4 py-1 w-3/4 outline-none mb-4'
							placeholder='Enter your email'
						></input>
						<button
							className='bg-blue-400 text-xl  px-2 rounded-2xl absolute 
						 top-0.5
						right-20'
						>
							&rarr;
						</button>
					</div>
				</section>
				<section className='pb-8'>
					<h4 className=' text-xs opacity-50 mb-4'>
						Copyright ©️ 2024 UI8 LLC. All rights reserved
					</h4>
					<ul className='flex gap-4 items-center'>
						<li>
							<img
								className=' opacity-50 h-7'
								src='social-icons/inst.svg'
								alt=''
							/>
						</li>
						<li>
							<img className='h-7' src='social-icons/tg.svg' alt='' />
						</li>
						<li>
							<img className='h-7' src='social-icons/yt.svg' alt='' />
						</li>
						<li>
							<img className='h-7' src='social-icons/slack.svg' alt='' />
						</li>
					</ul>
				</section>
			</div>
		</footer>
	)
}

export default Footer
