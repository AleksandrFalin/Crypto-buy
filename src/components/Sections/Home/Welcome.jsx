function Welcome() {
	return (
		<section className='mb-8 xl:mb-20'>
			<div className=' w-80-m-auto xl:w-1280-m-auto xl:flex xl:flex-row xl:relative'>
				<div className='xl:flex xl:flex-col xl:pt-20 xl:gap-6 '>
					<h2 className=' text-4xl mb-4 xl:text-6xl '>
						Buy & sell
						<br className=' hidden xl:block' />
						crypto in minutes
					</h2>
					<p className=' text-sm w-4/5 opacity-60 mb-4 xl:text-lg'>
						Trade Bitcoin,Ethereum,and the top altcoins on the legendary crypto
						asset exchange
					</p>
				</div>
				<button className='bg-blue-400 p-2 rounded-2xl mb-4 xl:absolute xl:bottom-1/3 xl:px-8 xl:py-4 xl:text-lg xl:hover:opacity-80 xl:hover:transition-all xl:ease-in-out'>
					Get started now
				</button>
				<button className='hidden xl:block xl:absolute xl:top-3/4  xl:border xl:px-3 xl:py-1 xl:rounded-3xl xl:text-2xl xl:hover:opacity-50 xl:hover:transition-all xl:ease-in-out'>
					&darr;
				</button>
				<img className='xl:w-2/4' src='payment-card.svg' alt='payment-card' />
			</div>
		</section>
	)
}

export default Welcome
