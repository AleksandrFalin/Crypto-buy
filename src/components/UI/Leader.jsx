import checkingForSign from '../../utils/checkingForSign'
import { getIconPath } from '../../utils/searchIcon'
function Leader({ symbol, image, name, priceUsd, changePercent24Hr }) {
	const checkNumber = checkingForSign(changePercent24Hr)
	const iconPath = getIconPath(symbol)
	return (
		<li className='flex flex-col place-items-center gap-y-2 py-2 hover:bg-slate-400/25 hover:rounded-3xl xl:basis-80 xl:py-14'>
			<div className='flex flex-row gap-x-2 items-center xl:flex-col xl:items-start xl:gap-2 relative'>
				<div
					className={`${
						checkNumber ? 'bg-green-600' : 'bg-red-600'
					} rounded-3xl text-xs px-2 py-1 order-1  xl:text-lg xl:px-4 xl:py-1 xl:absolute xl:right-0 xl:top-0`}
				>
					{checkNumber ? '+' : ''}
					{changePercent24Hr.substring(0, 4)}%
				</div>
				<img className=' w-8' src={iconPath} alt='' />
				<h4 className='xl:text-2xl uppercase'>
					{name}/{symbol}
				</h4>
			</div>
			<strong className='xl:text-lg xl:pr-9 '>
				{priceUsd.substring(0, 7)}$
			</strong>
		</li>
	)
}

export default Leader
