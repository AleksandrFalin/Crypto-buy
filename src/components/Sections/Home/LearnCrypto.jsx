function LearnCrypto() {
	return (
		<article className='mb-8 '>
			<div className='w-80-m-auto text-center xl:w-1280-m-auto xl:text-left xl:relative'>
				<h2 className=' text-4xl mb-4 xl:text-6xl xl:px-4'>Learn crypto</h2>
				<div className='xl:px-4'>
					<nav className=' flex justify-evenly mb-8 xl:justify-start xl:gap-12 xl:ml-2 xl:mb-20'>
						<button className=' opacity-70 hover:text-white hover:opacity-100   '>
							All
						</button>
						<button className=' opacity-70 hover:text-white hover:opacity-100 active:bg-white '>
							Bitcoin
						</button>
						<button className=' opacity-70 hover:text-white hover:opacity-100 active:bg-white  '>
							Blockchain
						</button>
					</nav>
					<section>
						<ul className='flex flex-col gap-8 mb-8 xl:flex-row xl:justify-between xl:gap-20 xl:mb-24'>
							<li className='flex gap-2 flex-col text-left xl:basis-3/6 xl:relative'>
								<img
									className='bg-blue-300 rounded-3xl mb-4 '
									src='btc-learn.svg'
								/>
								<h4 className=' text-xl xl:text-3xl'>What is Bitcoin like?</h4>
								<p className=' text-sm opacity-50 xl:text-base'>
									Detailed descriptions of this coin
								</p>
								<button className='hidden xl:block xl:border-2 xl:border-solid xl:border-white xl:py-2 xl:px-4 xl:rounded-3xl xl:transition-all xl:ease-in-out xl:hover: hover:opacity-50 xl:absolute xl:bottom-44 xl:right-0'>
									Learn more &rarr;
								</button>
							</li>
							<div className='xl:flex xl:gap-8 xl:flex-col'>
								<li className='flex gap-2 flex-col text-left xl:flex-row xl:justify-between xl:text-left'>
									<img
										className='bg-pink-300 rounded-3xl xl:w-2/6 xl:order-2'
										src='video-btc.svg'
									/>
									<div className='xl:basis-2/4'>
										<h4 className='text-xl xl:text-3xl xl:mb-4'>
											Trading Tutorial Video
										</h4>
										<p className='text-sm opacity-50 xl:text-base xl:mb-20'>
											A fundamental trading course in just a couple of hours
										</p>
										<time
											className='hidden xl:block xl:opacity-50'
											dateTime='2024-04-26'
										>
											April 26,2024
										</time>
									</div>
								</li>
								<li className='hidden xl:flex xl:gap-2  xl:flex-row xl:justify-between xl:text-left'>
									<img
										className='xl:bg-rose-300 xl:rounded-3xl xl:w-2/6 xl:order-2'
										src='coin-growth.svg'
									/>
									<div className='xl:basis-2/4'>
										<h4 className=' xl:text-3xl xl:mb-4'>
											Coins that give you the opportunity
										</h4>
										<p className='xl:opacity-50 xl:text-base xl:mb-20'>
											Maybe you should get to know them
										</p>
										<time
											className='hidden xl:block xl:opacity-50'
											dateTime='2024-04-21'
										>
											April 21,2024
										</time>
									</div>
								</li>
								<li className='hidden xl:flex xl:gap-2  xl:flex-row xl:justify-between xl:text-left'>
									<img
										className='xl:bg-purple-400 xl:rounded-3xl xl:w-2/6 xl:order-2'
										src='token.svg'
									/>
									<div className='xl:basis-2/4'>
										<h4 className=' xl:text-3xl xl:mb-4'>
											A new token for the ICO
										</h4>
										<p className='xl:opacity-50 xl:text-base xl:mb-20'>
											Have time to buy one of the first
										</p>
										<time
											className='hidden xl:block xl:opacity-50'
											dateTime='2024-04-21'
										>
											April 2,2024
										</time>
									</div>
								</li>
							</div>
						</ul>
						<div className='flex justify-center gap-8 mb-8 xl:hidden'>
							<button className='border border-solid border-white text-4xl pb-1 px-2 rounded-full hover:opacity-50'>
								&larr;
							</button>
							<button className='border border-solid border-white text-4xl pb-1 px-2 rounded-full hover:opacity-50'>
								&rarr;
							</button>
						</div>
						<button className='border-2 border-solid border-white py-2 px-20 rounded-3xl transition-all ease-in-out hover: hover:opacity-50 xl:absolute xl:top-2 xl:right-8'>
							View more
						</button>
					</section>
				</div>
			</div>
		</article>
	)
}

export default LearnCrypto
