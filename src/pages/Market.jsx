import { fromUnixTime, getDate } from 'date-fns'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import CryptoCurrencySelectorWithChart from '../components/Sections/Market/CryptoCurrencySelectorWithChart'
import { getChart } from '../store/chartSlice'
import { getLeaders } from '../store/leadersSlice'

function Market() {
	const dispatch = useDispatch()
	const { leaders } = useSelector(state => state.leaders)
	const { chartData } = useSelector(state => state.chart)
	const [value, setValue] = useState('BTC')
	const symbol = leaders.data?.map(el => el.symbol)
	const dataGraph = chartData.flatMap(({ high, time }) => [
		{ uv: high.toFixed(2), name: getDate(fromUnixTime(time)) },
	])
	const minValue = dataGraph.reduce(
		(min, { uv }) => Math.min(min, parseFloat(uv)),
		Infinity
	)

	useEffect(() => {
		dispatch(getChart(value))
	}, [value])

	useEffect(() => {
		dispatch(getLeaders())
	}, [])

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return (
		<main className='w-80-m-auto full-height-mobile xl:w-1280-m-auto'>
			<h2 className='mb-4 text-center text-lg xl:text-left xl:pl-4 xl:text-4xl'>
				Chart of changes for the week
			</h2>
			<CryptoCurrencySelectorWithChart
				setValue={setValue}
				currentValue={symbol}
			/>
			<LineChart
				className='-left-2 xl:-left-20 top-12 !w-[304px] !mb-14 !h-[338px] xl:!w-[1280px]  '
				width={windowWidth < 1280 ? 320 : 1280}
				height={400}
				data={dataGraph}
			>
				<Line type='monotone' dataKey='uv' stroke='#8884d8' />
				<CartesianGrid stroke='#ccc' strokeDasharray='1 1' />
				<XAxis dataKey='name' />
				<YAxis domain={[minValue]} />
			</LineChart>
		</main>
	)
}

export default Market
