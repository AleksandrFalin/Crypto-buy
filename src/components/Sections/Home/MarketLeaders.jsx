function MarketLeaders() {
	return (
		<article className='mb-8 xl:mb-36  xl:overflow-hidden'>
			<div className='w-80-m-auto bg-slate-800/95 py-6 rounded-3xl xl:w-1280-m-auto  xl:py-6 xl:cursor-pointer '>
				<ul className='flex flex-col gap-4 xl:flex-row xl:justify-between '>
					<li className='flex flex-col place-items-center gap-y-2 py-2 hover:bg-slate-400/25 hover:rounded-3xl xl:basis-80 xl:py-14'>
						<div className='flex flex-row gap-x-2 items-center xl:flex-col xl:items-start xl:gap-2 '>
							<img className=' w-8' src='btc.svg' alt='' />
							<h4 className='xl:text-2xl'>BTC/USDT</h4>
						</div>
						<strong className='xl:text-lg xl:pr-9'>36,641.20</strong>
					</li>
					<li className='flex flex-col place-items-center gap-y-2 py-2 hover:bg-slate-400/25 hover:rounded-3xl xl:basis-80 xl:py-14'>
						<div className='flex flex-row gap-x-2 items-center xl:flex-col xl:items-start xl:gap-2 '>
							<img className=' w-8' src='btc.svg' alt='' />
							<h4 className='xl:text-2xl'>BTC/USDT</h4>
						</div>
						<strong className='xl:text-lg xl:pr-9'>36,641.20</strong>
					</li>
					<li className='flex flex-col place-items-center gap-y-2 py-2 hover:bg-slate-400/25 hover:rounded-3xl xl:basis-80 xl:py-14'>
						<div className='flex flex-row gap-x-2 items-center xl:flex-col xl:items-start xl:gap-2 '>
							<img className=' w-8' src='btc.svg' alt='' />
							<h4 className='xl:text-2xl'>BTC/USDT</h4>
						</div>
						<strong className='xl:text-lg xl:pr-9'>36,641.20</strong>
					</li>
					<li className='hidden xl:flex xl:flex-col xl:place-items-center xl:gap-y-2  xl:hover:bg-slate-400/25 xl:hover:rounded-3xl xl:basis-80 xl:py-14'>
						<div className='flex flex-row gap-x-2 items-center xl:flex-col xl:items-start xl:gap-2 '>
							<img className=' w-8' src='btc.svg' alt='' />
							<h4 className='xl:text-2xl'>BTC/USDT</h4>
						</div>
						<strong className='xl:text-lg xl:pr-9'>36,641.20</strong>
					</li>
				</ul>
			</div>
		</article>
	)
}

export default MarketLeaders
