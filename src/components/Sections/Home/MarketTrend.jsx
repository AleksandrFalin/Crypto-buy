import { useState } from 'react'

function MarketTrend() {
	const [value, setValue] = useState('All')
	const handleChange = event => {
		setValue(event.target.value)
	}

	return (
		<article className='mb-8 xl:mb-24'>
			<div className='w-80-m-auto text-center xl:w-1280-m-auto xl:relative'>
				<h2 className='text-4xl mb-8 xl:text-left xl:text-6xl xl:px-4'>
					Market trend
				</h2>
				<select
					defaultValue={value}
					onChange={handleChange}
					className='w-full bg-transparent mb-4 xl:hidden'
				>
					<option className=' bg-transparent text-black' value='value1'>
						All
					</option>
					<option className=' bg-transparent text-black' value='value2'>
						Second
					</option>
				</select>
				<ul className='hidden xl:flex xl:gap-8 xl:px-4 xl:cursor-pointer xl:mb-8'>
					<li className='xl:opacity-70 xl:hover:text-white xl:hover:opacity-100 xl:active:bg-white'>
						All
					</li>
					<li className='xl:opacity-70 xl:hover:text-white xl:hover:opacity-100 xl:active:bg-white'>
						DeFi
					</li>
					<li className='xl:opacity-70 xl:hover:text-white xl:hover:opacity-100 xl:active:bg-white'>
						Innovation
					</li>
					<li className='xl:opacity-70 xl:hover:text-white xl:hover:opacity-100 xl:active:bg-white'>
						POS
					</li>
					<li className='xl:opacity-70 xl:hover:text-white xl:hover:opacity-100 xl:active:bg-white'>
						POW
					</li>
				</ul>
				<section className='flex flex-col gap-4 flex-wrap mb-8 xl:px-4'>
					<div className='flex justify-between text-xs opacity-50 flex-nowrap xl:grid-columns xl:gap-4'>
						<h4 className='text-left'>Name</h4>
						<div className='flex gap-2 text-xs xl:grid xl:grid-columns-graph xl:justify-between'>
							<h4 className='mr-4'>Price</h4>
							<h4>24h change</h4>
							<h4 className='hidden xl:inline'>Chart</h4>
							<h4 className='hidden xl:inline'>Trade</h4>
						</div>
					</div>
					<div className='flex gap-4   flex-nowrap  xl:grid-columns  '>
						<div className='flex gap-4 items-center basis-36  '>
							<img className=' max-w-8' src='btc.svg' />
							<h3 className='text-sm xl:text-xl'>Bitcoin</h3>
							<p className='hidden xl:inline xl:pt-1 xl:text-sm xl:opacity-50'>
								BTC
							</p>
						</div>
						<div className='flex gap-12 pt-1 items-baseline xl:grid xl:grid-columns-graph  xl:gap-0  xl:justify-between '>
							<p className='text-xs basis-16 xl:basis-0 '>$36,201</p>
							<span className='text-xs  text-green-500'>+1.71%</span>
							<img className='hidden max-w-8 xl:block ' src='graph.svg'></img>
							<button className='hidden xl:block xl:border xl:px-2 xl:py-1 xl:rounded-3xl xl:text-sm xl:transition-all xl:ease-in-out xl:hover:opacity-50'>
								Trade
							</button>
						</div>
					</div>
					<div className='flex gap-4   flex-nowrap  xl:grid-columns  '>
						<div className='flex gap-4 items-center basis-36  '>
							<img className=' max-w-8' src='btc.svg' />
							<h3 className='text-sm xl:text-xl'>Bitcoin</h3>
							<p className='hidden xl:inline xl:pt-1 xl:text-sm xl:opacity-50'>
								BTC
							</p>
						</div>
						<div className='flex gap-12 pt-1 items-baseline xl:grid xl:grid-columns-graph  xl:gap-0  xl:justify-between '>
							<p className='text-xs basis-16 xl:basis-0 '>$36,201</p>
							<span className='text-xs  text-green-500'>+1.71%</span>
							<img className='hidden max-w-8 xl:block ' src='graph.svg'></img>
							<button className='hidden xl:block xl:border xl:px-2 xl:py-1 xl:rounded-3xl xl:text-sm xl:transition-all xl:ease-in-out xl:hover:opacity-50'>
								Trade
							</button>
						</div>
					</div>
					<div className='flex gap-4   flex-nowrap  xl:grid-columns  '>
						<div className='flex gap-4 items-center basis-36  '>
							<img className=' max-w-8' src='btc.svg' />
							<h3 className='text-sm xl:text-xl'>Bitcoin</h3>
							<p className='hidden xl:inline xl:pt-1 xl:text-sm xl:opacity-50'>
								BTC
							</p>
						</div>
						<div className='flex gap-12 pt-1 items-baseline xl:grid xl:grid-columns-graph  xl:gap-0  xl:justify-between '>
							<p className='text-xs basis-16 xl:basis-0 '>$36,201</p>
							<span className='text-xs  text-red-500'>-10.41%</span>
							<img className='hidden max-w-8 xl:block ' src='graph.svg'></img>
							<button className='hidden xl:block xl:border xl:px-2 xl:py-1 xl:rounded-3xl xl:text-sm xl:transition-all xl:ease-in-out xl:hover:opacity-50'>
								Trade
							</button>
						</div>
					</div>
					<div className='flex gap-4   flex-nowrap  xl:grid-columns  '>
						<div className='flex gap-4 items-center basis-36  '>
							<img className=' max-w-8' src='btc.svg' />
							<h3 className='text-sm xl:text-xl'>Bitcoin</h3>
							<p className='hidden xl:inline xl:pt-1 xl:text-sm xl:opacity-50'>
								BTC
							</p>
						</div>
						<div className='flex gap-12 pt-1 items-baseline xl:grid xl:grid-columns-graph  xl:gap-0  xl:justify-between '>
							<p className='text-xs basis-16 xl:basis-0 '>$36,201</p>
							<span className='text-xs  text-red-500'>-1.71%</span>
							<img className='hidden max-w-8 xl:block ' src='graph.svg'></img>
							<button className='hidden xl:block xl:border xl:px-2 xl:py-1 xl:rounded-3xl xl:text-sm xl:transition-all xl:ease-in-out xl:hover:opacity-50'>
								Trade
							</button>
						</div>
					</div>
				</section>
				<button className='border-2 border-solid border-white py-2 px-20 rounded-3xl transition-all ease-in-out hover: hover:opacity-50 xl:absolute xl:top-2 xl:right-8'>
					View more
				</button>
			</div>
		</article>
	)
}

export default MarketTrend
