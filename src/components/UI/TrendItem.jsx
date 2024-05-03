import checkingForSign from '../../utils/checkingForSign'
import { getIconPath } from '../../utils/searchIcon'

function TrendItem({ name, symbol, priceUsd, changePercent24Hr, supply }) {
	const checkNumber = checkingForSign(changePercent24Hr)
	const iconPath = getIconPath(symbol)

	return (
		<div className='flex  xl:gap-4   flex-nowrap  xl:grid-columns  '>
			<div className='flex gap-4 items-center basis-36  '>
				<img className=' max-w-8' src={iconPath} />
				<h3 className='text-sm text-left xl:text-xl'>{name}</h3>
				<p className='hidden xl:inline xl:pt-1 xl:text-sm xl:opacity-50'>
					{symbol}
				</p>
			</div>
			<div className='flex gap-12 pt-1 xl:items-baseline xl:grid xl:grid-columns-graph  xl:gap-0  xl:justify-between '>
				<p className='text-xs basis-24 xl:basis-0 '>
					${String(priceUsd).substring(0, 7)}
				</p>
				<span
					className={` ${
						checkNumber ? 'text-green-600' : 'text-red-600'
					} text-xs`}
				>
					{checkNumber ? '+' : ''}
					{String(changePercent24Hr).substring(0, 4)}%
				</span>
				<p className='hidden xl:block'>{Number(supply).toFixed(0)}</p>
				<button className='hidden xl:block xl:border xl:px-2 xl:py-1 xl:rounded-3xl xl:text-sm xl:transition-all xl:ease-in-out xl:hover:opacity-50'>
					Trade
				</button>
			</div>
		</div>
	)
}

export default TrendItem
