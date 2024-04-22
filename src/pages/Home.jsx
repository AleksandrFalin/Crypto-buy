import { useState } from 'react'

function Home() {
	const [value, setValue] = useState('All')
	const handleChange = event => {
		setSelectedValue(event.target.value)
	}
	return (
		<main className='mb-8'>
			<section className='mb-8'>
				<div className=' w-80-m-auto'>
					<h2 className=' text-4xl mb-4'>Buy & sell crypto in minutes</h2>
					<p className=' text-sm w-4/5 opacity-60 mb-4'>
						Trade Bitcoin,Ethereum,and the top altcoins on the legendary crypto
						asset exchange
					</p>
					<button className='bg-blue-400 p-2 rounded-2xl mb-4'>
						Get started now
					</button>
					<img src='payment-card.svg' alt='payment-card' />
				</div>
			</section>
			<article className='mb-8'>
				<div className='w-80-m-auto bg-slate-800/95 py-6 rounded-3xl'>
					<ul className='flex flex-col gap-4'>
						<li className='flex flex-col place-items-center gap-y-2 py-2 hover:bg-slate-400/25 hover:rounded-3xl'>
							<div className='flex flex-row gap-x-2 items-center'>
								<img className=' w-8' src='btc.svg' alt='' />
								<h4>BTC/USDT</h4>
							</div>
							<strong>36,641.20</strong>
						</li>
						<li className='flex flex-col place-items-center gap-y-2 py-2 hover:bg-slate-400/25 hover:rounded-3xl'>
							<div className='flex flex-row gap-x-2 items-center'>
								<img className=' w-8' src='btc.svg' alt='' />
								<h4>BTC/USDT</h4>
							</div>
							<strong>36,641.20</strong>
						</li>
						<li className='flex flex-col place-items-center gap-y-2 py-2 hover:bg-slate-400/25 hover:rounded-3xl'>
							<div className='flex flex-row gap-x-2 items-center'>
								<img className=' w-8' src='btc.svg' alt='' />
								<h4>BTC/USDT</h4>
							</div>
							<strong>36,641.20</strong>
						</li>
					</ul>
				</div>
			</article>
			<article className='mb-8'>
				<div className='w-80-m-auto text-center'>
					<h2 className=' text-4xl mb-4'>Learn crypto</h2>
					<div>
						<nav className=' flex justify-evenly mb-8'>
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
							<ul className='flex flex-col gap-8 mb-8'>
								<li className='flex gap-2 flex-col text-left'>
									<img
										className='bg-blue-300 rounded-3xl mb-4'
										src='btc-learn.svg'
									/>
									<h4 className=' text-xl'>What is Bitcoin like?</h4>
									<p className=' text-sm opacity-50'>
										Detailed descriptions of this coin
									</p>
								</li>
								<li className='flex gap-2 flex-col text-left'>
									<img
										className='bg-pink-300 rounded-3xl'
										src='video-btc.svg'
									/>
									<h4 className=' text-xl'>Trading Tutorial Video</h4>
									<p className='text-sm opacity-50'>
										A fundamental trading course in just a couple of hours
									</p>
								</li>
							</ul>

							<div className='flex justify-center gap-8 mb-8'>
								<button className='border border-solid border-white text-4xl pb-1 px-2 rounded-full hover:opacity-50'>
									&larr;
								</button>
								<button className='border border-solid border-white text-4xl pb-1 px-2 rounded-full hover:opacity-50'>
									&rarr;
								</button>
							</div>
							<button className='border-2 border-solid border-white py-2 px-20 rounded-3xl transition-all ease-in-out hover: hover:opacity-50'>
								View more
							</button>
						</section>
					</div>
				</div>
			</article>
			<article className='mb-8'>
				<div className='w-80-m-auto text-center'>
					<h2 className='text-4xl mb-8'>Market trend</h2>
					<select
						defaultValue={value}
						onChange={handleChange}
						className='w-full bg-transparent mb-4'
					>
						<option className=' bg-transparent text-black' value='value1'>
							All
						</option>
						<option className=' bg-transparent text-black' value='value2'>
							Second
						</option>
					</select>
					<section className='flex flex-col gap-4 flex-wrap mb-8'>
						<div className='flex justify-between text-xs opacity-50 flex-nowrap'>
							<h4>Name</h4>
							<div className='flex gap-2 text-xs'>
								<h4 className='mr-4'>Price</h4>
								<h4>24h change</h4>
							</div>
						</div>
						<div className='flex justify-between items-center gap-4 flex-nowrap'>
							<div className='flex gap-4 items-center'>
								<img className=' max-w-8' src='btc.svg' />
								<h3>Bitcoin</h3>
							</div>
							<p className='text-xs '>$36,201</p>
							<span className='text-xs  text-green-500'>+1.71%</span>
						</div>
						<div className='flex justify-between items-center gap-4 '>
							<div className='flex gap-4 items-center'>
								<img className=' max-w-8' src='btc.svg' />
								<h3>Bitcoin</h3>
							</div>
							<p className='text-xs '>$36,201</p>
							<span className='text-xs  text-green-500'>+1.71%</span>
						</div>
						<div className='flex justify-between items-center gap-4 '>
							<div className='flex gap-4 items-center'>
								<img className=' max-w-8' src='btc.svg' />
								<h3>Bitcoin</h3>
							</div>
							<p className='text-xs '>$36,201</p>
							<span className='text-xs  text-green-500'>+1.71%</span>
						</div>
						<div className='flex justify-between items-center gap-4 '>
							<div className='flex gap-4 items-center'>
								<img className=' max-w-8' src='btc.svg' />
								<h3>Bitcoin</h3>
							</div>
							<p className='text-xs '>$36,201</p>
							<span className='text-xs  text-red-500'>-1.71%</span>
						</div>
					</section>
					<button className='border-2 border-solid border-white py-2 px-20 rounded-3xl transition-all ease-in-out hover: hover:opacity-50'>
						View more
					</button>
				</div>
			</article>
			<section className='w-80-m-auto text-center'>
				<img className='mb-4' src='mobile-app.svg' />
				<h2 className=' text-4xl mb-4'>Trade anywhere</h2>
				<p className='text-left opacity-50 mb-8'>
					Anytime,anywhere.Trade crypto on your terms
				</p>
				<div className='flex flex-col'>
					<div className='relative flex flex-row gap-4 items-center before:border-b before:border-b-gray-50 before:absolute before:w-full before:bottom-0 before:opacity-50 pb-4'>
						<img
							className=' cursor-pointer w-8'
							src='company-icons/apple.svg'
							alt=''
						/>
						<div className='text-left'>
							<p className='opacity-50'>Dowland from</p>
							<h4 className=' text-xl'>Appstore</h4>
						</div>
					</div>
					<div className='relative flex flex-row gap-4 items-center pt-4'>
						<button className=' text-2xl w-8 bg-blue-400  rounded-2xl'>
							{' '}
							&rarr;
						</button>
						<div className='text-left'>
							<p className='opacity-50'>Dowland from</p>
							<h4 className=' text-xl'>Google Play</h4>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
