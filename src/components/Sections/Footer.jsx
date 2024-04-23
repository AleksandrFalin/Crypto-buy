function Footer() {
	return (
		<footer className='xl:relative xl:after:absolute xl:border-t xl:after:border-b xl:border-gray-600 xl:after:border-gray-600 xl:after:w-full xl:after:bottom-16'>
			<div className='w-80-m-auto pb-4 xl:w-1280-m-auto xl:px-8 xl:flex xl:flex-col xl:gap-6 xl:pt-8'>
				<div className=' xl:flex xl:flex-row xl:w-1280-m-auto xl:justify-between xl:items-center xl:pb-8 '>
					<h2 className='text-2xl text-center border py-1 rounded-3xl mb-8 xl:mb-0 xl:text-xl xl:py-2 xl:px-2 xl:rounded-full'>
						CryptoFusion Nexus
					</h2>
					<nav className='flex justify-between items-center mb-4 xl:mb-0'>
						<h3 className='uppercase xl:hidden'>Footer nav</h3>
						<button className='rotate-90 xl:hidden'>&#10148;</button>
						<ul className='text-center hidden xl:flex xl:flex-col xl:text-xl xl:gap-7'>
							<li className='xl:text-xl xl:opacity-50 xl:hover:opacity-100 xl:cursor-pointer'>
								About
							</li>
							<li className='xl:text-xl xl:opacity-50 xl:hover:opacity-100 xl:cursor-pointer'>
								Policy
							</li>
							<li className='xl:text-xl xl:opacity-50 xl:hover:opacity-100 xl:cursor-pointer'>
								FAQ
							</li>
						</ul>
					</nav>
					<section className='relative before:absolute before:border-t  before:border-gray-500 before:w-full after:absolute after:border-t  after:border-gray-500 after:w-full xl:after:border-t-0 xl:before:border-t-0 xl:w-2/12 xl:text-center'>
						<div className='py-3 xl:py-0   xl:flex xl:flex-col xl:gap-6'>
							<h3 className='mb-4 uppercase xl:mb-0 xl:text-xl '>Contact</h3>
							<p className=' w-2/3 xl:opacity-50 xl:text-sm xl:break-words  xl:w-56'>
								43252 Borer Mountains Zackerychester Bahamas
							</p>
							<p className='xl:opacity-50'>732-528-4945</p>
						</div>
					</section>
					<section className='pt-4 mb-4 relative after:absolute after:border-t  after:border-gray-500 after:w-full xl:mb-0 xl:pt-0 xl:flex xl:flex-col xl:after:border-t-0 '>
						<h3 className='mb-4 uppercase xl:text-xl xl:mb-6'>NEWSLETTER</h3>
						<p className='mb-4 xl:mb-6'>
							Subscribe to our newsletter to receive more information
						</p>
						<div className='flex items-center relative'>
							<input
								className=' bg-transparent border border-gray-500 rounded-3xl indent-4 py-1 w-3/4 outline-none mb-4 xl:mb-0 xl:py-2'
								placeholder='Enter your email'
							></input>
							<button
								className='bg-blue-400 text-xl  px-2 rounded-2xl absolute 
						 top-0.5
						right-20 xl:right-32 xl:px-2 xl:top-1.5'
							>
								&rarr;
							</button>
						</div>
					</section>
				</div>
				<section className='pb-8 xl:pb-0 xl:flex xl:justify-between xl:items-center xl:w-1280-m-auto'>
					<h4 className=' text-xs opacity-50 mb-4 xl:mb-0'>
						Copyright ©️ 2024 UI8 LLC. All rights reserved
					</h4>
					<ul className='flex gap-4 items-center'>
						<li>
							<img
								className=' opacity-50 h-7'
								src='social-icons/inst.svg'
								alt='instagram'
							/>
						</li>
						<li>
							<img className='h-7' src='social-icons/tg.svg' alt='telegram' />
						</li>
						<li>
							<img className='h-7' src='social-icons/yt.svg' alt='youtube' />
						</li>
						<li>
							<img className='h-7' src='social-icons/slack.svg' alt='slack' />
						</li>
					</ul>
				</section>
			</div>
		</footer>
	)
}

export default Footer
