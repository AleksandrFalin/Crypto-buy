import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeaders } from '../../../store/leadersSlice'
import Leader from '../../UI/Leader'
function MarketLeaders() {
	const dispatch = useDispatch()
	const { leaders, status, error } = useSelector(state => state.leaders)
	const topFourleaders = leaders && leaders.data ? leaders.data.slice(0, 4) : []

	useEffect(() => {
		dispatch(getLeaders())
	}, [])

	return (
		<article className='mb-8 xl:mb-36  xl:overflow-hidden'>
			<div className='w-80-m-auto bg-slate-800/95 py-6 rounded-3xl xl:w-1280-m-auto  xl:py-6 xl:cursor-pointer '>
				<ul className='flex flex-col gap-4 xl:flex-row xl:justify-between '>
					{status === 'loading' && <div className='mx-auto'>Loading...</div>}
					{error && <p className=' mx-auto'>{error}</p>}
					{topFourleaders.map(leader => (
						<Leader key={leader.symbol} {...leader} />
					))}
				</ul>
			</div>
		</article>
	)
}

export default MarketLeaders
