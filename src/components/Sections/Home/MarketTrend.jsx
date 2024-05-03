import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, loadMore } from '../../../store/categorySlice'
import TrendItem from '../../UI/TrendItem'
function MarketTrend() {
	const dispatch = useDispatch()
	const { ids, status, limit, currentItems, error } = useSelector(
		state => state.category
	)

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		dispatch(getCategory({ ids, limit }))
	}, [])

	async function handleLoadMore() {
		setIsLoading(true)
		await dispatch(loadMore())
		await dispatch(getCategory({ ids, limit }))
		setIsLoading(false)
	}

	const handleChange = event => {
		const currentValue = event.target.value
		if (currentValue === 'all') {
			dispatch(getCategory({ ids, limit }))
		} else {
			dispatch(getCategory({ ids: currentValue, limit: 14 }))
		}
	}

	return (
		<article className='mb-8 xl:mb-24'>
			<div className='w-80-m-auto text-center xl:w-1280-m-auto xl:relative'>
				<h2 className='text-4xl mb-8 xl:text-left xl:text-6xl xl:px-4'>
					Market trend
				</h2>
				<select
					onChange={handleChange}
					className='w-full bg-transparent mb-4 xl:px-4'
				>
					<option className=' bg-transparent text-black' value='all'>
						All
					</option>
					<option
						className=' bg-transparent text-black'
						value='mybit-token,reddcoin,bancor,huobi-token,waltonchain,komodo,maidsafecoin,mithril,stratis,hshare,dogecoin,icon,maker,zilliqa'
					>
						Different
					</option>
				</select>
				<section className='flex flex-col gap-4 flex-wrap mb-8 xl:px-4'>
					<div className='flex justify-between text-xs opacity-50 flex-nowrap xl:grid-columns xl:gap-4'>
						<h4 className='text-left'>Name</h4>
						<div className='flex gap-4 xl:gap-2 text-xs xl:grid xl:grid-columns-graph xl:justify-between'>
							<h4 className='mr-4'>Price</h4>
							<h4>24h change</h4>
							<h4 className='hidden xl:inline'>Supply</h4>
							<h4 className='hidden xl:inline'>Trade</h4>
						</div>
					</div>
					{status === 'loading' && <div>Loading...</div>}
					{error && <p>{error}</p>}
					{status !== 'loading' &&
						!error &&
						currentItems?.data?.map(item => (
							<TrendItem key={item.symbol} {...item} />
						))}
				</section>
				<button
					onClick={handleLoadMore}
					className='border-2 border-solid border-white py-2 px-20 rounded-3xl transition-all ease-in-out hover: hover:opacity-50 xl:absolute xl:top-2 xl:right-8'
					disabled={isLoading}
				>
					View more
				</button>
			</div>
		</article>
	)
}

export default MarketTrend
